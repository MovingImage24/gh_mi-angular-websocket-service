'use strict';

/**
 * @ngInject
 */

window.SockJS = require('sockjs-client');
window.Stomp = require('stompjs/lib/stomp.min').Stomp;

module.exports = angular
  .module('mi.WebsocketService', [])
  .factory('WebsocketService', require('./websocket-service'))
;
