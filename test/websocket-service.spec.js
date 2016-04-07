'use strict';

describe('Service:WebsocketService', function () {

  beforeEach(function () {
    angular.mock.module('mi.WebsocketService');
  });

  describe('blah', function () {

    it('should what? ... ', angular.mock.inject(function (WebsocketService) {
      WebsocketService.disconnect();
      expect(true).toBeTruthy();
    }));

  });
});
