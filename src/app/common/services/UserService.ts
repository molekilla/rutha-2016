import 'angular';
import {User} from '../models/User';

export class UserService {
    _$http: angular.IHttpService;
    _$q: angular.IQService;

    static $inject = ['$q'];
    static name: string = typeof UserService;
    constructor($q: angular.IQService, $http: angular.IHttpService) {
        this._$q = $q;
        this._$http = $http;
    }

    signup(user: User): angular.IPromise<any> {
        let deferred = this._$q.defer<any>();

        this._$http
            .post('/auth/signup', {
                email: user.username,
                password: user.password
            })
            .success((response: any, status: number, headers) => {
                if (status === 201) {
                    deferred.resolve({ err: null, data: true });
                } else {
                    deferred.reject({ err: response.message });
                }
            })
            .error((response: any, status: number) => {
                deferred.reject({ err: response.message });
            });

        return deferred.promise;
    }

    login(user: User) {
        let deferred = this._$q.defer();

        this._$http
            .post('/auth/login', {
                email: user.username,
                password: user.password
            })
            .success((response: any, status: number, headers) => {
                if (status === 201) {
                    deferred.resolve({ err: null, data: true });
                } else {
                    deferred.reject({ err: response.message });
                }
            })
            .error((response: any, status: number) => {
                deferred.reject({ err: response.message });
            });

        return deferred.promise;
    }
}