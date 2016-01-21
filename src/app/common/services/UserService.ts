import 'angular';
import {User} from '../models/User';

export class UserService {
    static $inject = ['$q'];
    static name: string = typeof UserService;
    constructor(private $q: angular.IQService, private $http: angular.IHttpService) {
    }

    signup(user: User): angular.IPromise<any> {
        let deferred = this.$q.defer<any>();

        this.$http
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
        let deferred = this.$q.defer();

        this.$http
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