/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @ngInject
	 */
	module.exports = angular
	  .module('mi.WebsocketService', [])
	  .service('WebsocketService', __webpack_require__(1))
	;


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	/**
	 * @ngInject
	 */
	module.exports = function ($q, $log) {
	  var webSocketClient;
	  webSocketClient = null;
	  return {
	    connect: function () {
	      var deferred, onConnect, onError;

	      // TODO von außen injizieren ...
	      //var stompConfig = {
	      //  user: 'user',
	      //  password: 'guest',
	      //  host: '//' + $location.host() + ':15672/stomp'
	      //  //host: 'amqp://127.0.0.1'
	      //};
	      var stompConfig = {
	        user: 'jlbnllvg',
	        password: 'hL4BAyeN_IKMwWnVtcDlQQJ9b0zhFL24',
	        host: 'https://hare.rmq.cloudamqp.com/stomp',
	        vhost: 'jlbnllvg'
	      };
	      deferred = $q.defer();
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
	module.exports.$inject = ["$q", "$log"];

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjZhOGZmNDJiNzFmY2Q4MjhjYzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy93ZWJzb2NrZXQtc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHIiwiZmlsZSI6Im1pLWFuZ3VsYXItd2Vic29ja2V0LXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGI2YThmZjQyYjcxZmNkODI4Y2M2XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXJcbiAgLm1vZHVsZSgnbWkuV2Vic29ja2V0U2VydmljZScsIFtdKVxuICAuc2VydmljZSgnV2Vic29ja2V0U2VydmljZScsIHJlcXVpcmUoJy4vd2Vic29ja2V0LXNlcnZpY2UnKSlcbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkcSwgJGxvZykge1xuICB2YXIgd2ViU29ja2V0Q2xpZW50O1xuICB3ZWJTb2NrZXRDbGllbnQgPSBudWxsO1xuICByZXR1cm4ge1xuICAgIGNvbm5lY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBkZWZlcnJlZCwgb25Db25uZWN0LCBvbkVycm9yO1xuXG4gICAgICAvLyBUT0RPIHZvbiBhdcOfZW4gaW5qaXppZXJlbiAuLi5cbiAgICAgIC8vdmFyIHN0b21wQ29uZmlnID0ge1xuICAgICAgLy8gIHVzZXI6ICd1c2VyJyxcbiAgICAgIC8vICBwYXNzd29yZDogJ2d1ZXN0JyxcbiAgICAgIC8vICBob3N0OiAnLy8nICsgJGxvY2F0aW9uLmhvc3QoKSArICc6MTU2NzIvc3RvbXAnXG4gICAgICAvLyAgLy9ob3N0OiAnYW1xcDovLzEyNy4wLjAuMSdcbiAgICAgIC8vfTtcbiAgICAgIHZhciBzdG9tcENvbmZpZyA9IHtcbiAgICAgICAgdXNlcjogJ2psYm5sbHZnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICdoTDRCQXllTl9JS013V25WdGNEbFFRSjliMHpoRkwyNCcsXG4gICAgICAgIGhvc3Q6ICdodHRwczovL2hhcmUucm1xLmNsb3VkYW1xcC5jb20vc3RvbXAnLFxuICAgICAgICB2aG9zdDogJ2psYm5sbHZnJ1xuICAgICAgfTtcbiAgICAgIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgIHdlYlNvY2tldENsaWVudCA9IHdpbmRvdy5TdG9tcC5vdmVyKG5ldyB3aW5kb3cuU29ja0pTKHN0b21wQ29uZmlnLmhvc3QpKTtcbiAgICAgIHdlYlNvY2tldENsaWVudC5oZWFydGJlYXQuaW5jb21pbmcgPSAwO1xuICAgICAgd2ViU29ja2V0Q2xpZW50LmhlYXJ0YmVhdC5vdXRnb2luZyA9IDA7XG4gICAgICB3ZWJTb2NrZXRDbGllbnQuZGVidWcgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAkbG9nLmRlYnVnKCdTVE9NUCBERUJVRzpcXCcnICsgbWVzc2FnZSArICdcXCcnKTtcbiAgICAgIH07XG4gICAgICBvbkNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICB9O1xuICAgICAgb25FcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnJlamVjdCgpO1xuICAgICAgfTtcbiAgICAgIHdlYlNvY2tldENsaWVudC5jb25uZWN0KHN0b21wQ29uZmlnLnVzZXIsIHN0b21wQ29uZmlnLnBhc3N3b3JkLCBvbkNvbm5lY3QsIG9uRXJyb3IsIHN0b21wQ29uZmlnLnZob3N0KTtcbiAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH0sXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbiAocXVldWUsIG9uTWVzc2FnZSkge1xuICAgICAgcmV0dXJuIHdlYlNvY2tldENsaWVudC5zdWJzY3JpYmUocXVldWUsIG9uTWVzc2FnZSk7XG4gICAgfSxcbiAgICBkaXNjb25uZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZGVmZXJyZWQ7XG4gICAgICBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICBpZiAod2ViU29ja2V0Q2xpZW50ICE9IG51bGwpIHtcbiAgICAgICAgd2ViU29ja2V0Q2xpZW50LmRpc2Nvbm5lY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfSxcbiAgICBzZW5kOiBmdW5jdGlvbiAoZGVzdGluYXRpb24sIGhlYWRlcnMsIGJvZHkpIHtcbiAgICAgIHJldHVybiB3ZWJTb2NrZXRDbGllbnQuc2VuZChkZXN0aW5hdGlvbiwgaGVhZGVycywgYm9keSk7XG4gICAgfVxuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3dlYnNvY2tldC1zZXJ2aWNlLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==