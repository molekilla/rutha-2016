import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';

import {Headers, RequestOptions} from 'angular2/http';
import {User} from '../models/User';
import {IUserService} from './UserServiceProvider';


@Injectable()
export class UserService2 {

    constructor(private http: Http) { }

    login(user: User): Promise<any> {

        let body = JSON.stringify({
            email: user.username,
            password: user.password
        });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http
            .post('/auth/login', body, options)
            .toPromise()
            .catch(this.handleError)
            .then(res => {
                if (res.status === 201) {
                    return { err: null, data: true };
                } else {
                    return { err: res.json() };
                }
            });
    }

    signup(user: User): Promise<any> {

        let body = JSON.stringify({
            email: user.username,
            password: user.password
        });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http
            .post('/auth/signup', body, options)
            .toPromise()
            .catch(this.handleError)
            .then(res => {
                if (res.status === 201) {
                    return { err: null, data: true };
                } else {
                    return { err: res.json() };
                }
            });
    }
    private handleError(error: any) {
        console.error(error);
        return Promise.reject(error.json() || 'Server error');
    }

}

