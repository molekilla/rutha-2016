import 'angular';
import 'angular-mocks';
import {IUserService, UserService} from '../app/common/services/UserService';
//import {describe, expect, it} from 'jasmine';

export function main() {  
  
  let userService;
  
  beforeEach(angular.mock.module('app'));
  beforeEach(angular.mock.inject(function(_UserService_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    userService = _UserService_;
  }));
  describe('UserService', () => {
    it('should do something with the provided $log mock', () => {
      
      expect(UserService).toBe(1);
    });
  });
}