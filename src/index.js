'use strict';

/**
 * @ngInject
 */
module.exports = angular
  .module('mi.WebsocketService', [])
  .service('WebsocketService', require('./websocket-service'))
;
