import {BaseRequestOptions, Http} from 'angular2/http';
import {it, describe, expect, beforeEachProviders, beforeEach, inject} from 'angular2/testing';
import {Injector, provide} from 'angular2/core';
import {UserService} from '../app/common/services/UserService';
import {IUserService} from '../app/common/services/UserServiceProvider';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

class MockTestService implements IUserService {
    public login(): Observable<any> {
        return Observable.empty();
    }

    public signup(): Observable<any> {
        return Observable.empty();
    }
}

export function main() {

    beforeEachProviders(() => [
        provide(UserService, { useClass: MockTestService })
    ]);


    describe('UserService', () => {
        it('should load service', inject([UserService], (userService: UserService) => {

            expect(UserService).toBeAnInstanceOf(MockTestService);
        }));
        // describe('UserService.Login', () => {
        //     it('should login OK', () => {
        //         $httpBackend.expectPOST('/auth/login');
        //         userService
        //             .login({
        //                 username: 'mike',
        //                 password: 'qwerty'
        //             })
        //             .then(function(response) {
        //                 expect(response.data).toBe(true);
        //             });
        //         $httpBackend.flush();
        //     })
        // })
    }
    );

}