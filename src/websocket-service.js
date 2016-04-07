'use strict';
/**
 * @ngInject
 */
module.exports = function ($q, $log) {
  var webSocketClient;
  webSocketClient = null;
  return {
    connect: function (stompConfig) {
      var deferred, onConnect, onError;
      deferred = $q.defer();
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
      webSocketClient = window.Stomp.over(new window.SockJS(stompConfig.host));
      webSocketClient.heartbeat.incoming = 0;
      webSocketClient.heartbeat.outgoing = 0;
      webSocketClient.debug = function (message) {
        $log.debug('STOMP DEBUG:\'' + message + '\'');
      };
      onConnect = function () {
        return deferred.resolve();
      };
      onError = function () {
        return deferred.reject();
      };
      webSocketClient.connect(stompConfig.user, stompConfig.password, onConnect, onError, stompConfig.vhost);
      return deferred.promise;
    },
    subscribe: function (queue, onMessage) {
      return webSocketClient.subscribe(queue, onMessage);
    },
    disconnect: function () {
      var deferred;
      deferred = $q.defer();
      if (webSocketClient != null) {
        webSocketClient.disconnect(function () {
          return deferred.resolve();
        });
      }
      return deferred.promise;
    },
    send: function (destination, headers, body) {
      return webSocketClient.send(destination, headers, body);
    }
  };
};