import 'angular';
import 'restangular';
import 'underscore';
import 'angular-mocks';
import {IUserService, UserService} from '../app/common/services/UserService';

export function main() {

    let userService: IUserService,
        $httpBackend: ng.IHttpBackendService,
        handler;

    beforeEach(angular.mock.module('restangular'));
    beforeEach(angular.mock.module('app.services.UserService'));
    beforeEach(angular.mock.inject(function(_UserService_, _Restangular_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        userService = _UserService_;
        let RestangularProvider = _Restangular_;
        RestangularProvider.setFullResponse(true);
        RestangularProvider.setBaseUrl('/');
    }));
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;

        // POST
        handler = $httpBackend
            .when('POST', '/auth/login')
            .respond(201,
            {
                response: {
                    status: 201
                }
            },
            {
                'Location': 'http://localhost/profile'
            });


    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    describe('UserService', () => {
        it('should load service', () => {

            expect(UserService).toBeDefined();
        });
    });

    describe('UserService.Login', () => {
        it('should login OK', () => {
            $httpBackend.expectPOST('/auth/login');
            userService
                .login({
                    username: 'mike',
                    password: 'qwerty'
                })
                .then(function(response) {
                    expect(response.data).toBe(true);
                });
            $httpBackend.flush();
        })
    })
}