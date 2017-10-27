'use strict';
/**
 * @ngInject
 */
module.exports = function ($q, $log, $interval) {
  var webSocketClient = null;
  var sockConnection = null;
  var isConnected = false;
  var reconnectionInterval = null;

  return {
    connect: connect,
    subscribe: subscribe,
    disconnect: disconnect,
    send: send,
    connectionObserver: connectionObserver,
    cancelConnectionObserver: cancelConnectionObserver
  };

  function connectionObserver() {
    var timer = 0;
    var deferred = $q.defer();
    reconnectionInterval = $interval(function() {
      timer++;
      if (timer === 40) {
        if (!isConnected) {
          $interval.cancel(reconnectionInterval);
          reconnectionInterval = false;
          if (webSocketClient !== null) {
            webSocketClient.disconnect(function () {
              webSocketClient = null;
              return deferred.resolve();
            });
          }
        }
        timer = 0;
        isConnected = false;
      }
    }, 1000);
    return deferred.promise;
  }

  function cancelConnectionObserver() {
    var deferred = $q.defer();
    $interval.cancel(reconnectionInterval);
    reconnectionInterval = false;
    deferred.resolve();
    return deferred.promise;
  }

  function subscribe(queue, onMessage) {
    return webSocketClient.subscribe(queue, onMessage);
  }

  function connect(stompConfig) {
    var deferred, onConnect, onError;
    deferred = $q.defer();
    sockConnection = new window.SockJS(stompConfig.host);
    sockConnection.onheartbeat = function() {
      isConnected = true;
    };
    webSocketClient = window.Stomp.over(sockConnection);
    webSocketClient.heartbeat.incoming = 0;
    webSocketClient.heartbeat.outgoing = 0;
    webSocketClient.debug = null;

    if (angular.isUndefined(stompConfig.user)) {
      $log.error('WebsocketService - stompConfig.user is missing');
      return deferred.reject();
    }
    if (angular.isUndefined(stompConfig.password)) {
      $log.error('WebsocketService - stompConfig.password is missing');
      return deferred.reject();
    }
    if (angular.isUndefined(stompConfig.host)) {
      $log.error('WebsocketService - stompConfig.host is missing');
      return deferred.reject();
    }
    if (angular.isUndefined(stompConfig.vhost)) {
      $log.error('WebsocketService - stompConfig.vhost is missing');
      return deferred.reject();
    }
    if (angular.isDefined(stompConfig.debug) && stompConfig.debug === true) {
      webSocketClient.debug = function (message) {
        $log.debug('STOMP DEBUG:\'' + message + '\'');
      };
    }

    onConnect = function () {
      isConnected = true;
      return deferred.resolve();
    };

    onError = function () {
      $log.error('Connection to service host interrupted.');
      return deferred.reject();
    };

    webSocketClient.connect(stompConfig.user, stompConfig.password, onConnect, onError, stompConfig.vhost);

    return deferred.promise;
  }

  function disconnect() {
    var deferred;
    deferred = $q.defer();
    if (webSocketClient !== null) {
      webSocketClient.disconnect(function () {
        return deferred.resolve();
      });
    }
    return deferred.promise;
  }

  function send(destination, headers, body) {
    return webSocketClient.send(destination, headers, body);
  }

};
