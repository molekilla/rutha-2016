// // From https://developers.livechatinc.com/blog/testing-angular-2-apps-routeroutlet-and-http/
// import {it, describe, expect, beforeEachProviders, beforeEach, inject} from '@angular/core/testing';
// import {Injector, provide} from '@angular/core';
// import {UserService} from '../app/common/services/UserService';
// import {IUserService} from '../app/common/services/UserServiceProvider';
// import {Observable}     from 'rxjs/Observable';
// import 'rxjs/Rx';
// import {BaseRequestOptions, Response, ResponseOptions, Http} from '@angular/http';
// import {MockBackend, MockConnection} from '@angular/http/testing';

// export function main() {

//     beforeEachProviders(() => [
//         UserService,
//         BaseRequestOptions,
//         MockBackend,
//         provide(Http, {
//             useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
//                 return new Http(backend, defaultOptions);
//             },
//             deps: [MockBackend, BaseRequestOptions]
//         })
//     ]);

//     beforeEach(inject([MockBackend], (backend: MockBackend) => {
//         const baseResponse = new Response(new ResponseOptions({ body: 'got response' }));
//         backend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));
//     }));

//     describe('UserService', () => {
//         it('should load service', inject([UserService], (userService: UserService) => {
//             expect(userService).toBeAnInstanceOf(UserService);
//         }));
//         // describe('UserService.Login', () => {
//         //     it('should login OK', () => {
//         //         $httpBackend.expectPOST('/auth/login');
//         //         userService
//         //             .login({
//         //                 username: 'mike',
//         //                 password: 'qwerty'
//         //             })
//         //             .then(function(response) {
//         //                 expect(response.data).toBe(true);
//         //             });
//         //         $httpBackend.flush();
//         //     })
//         // })
//     }
//     );

// }