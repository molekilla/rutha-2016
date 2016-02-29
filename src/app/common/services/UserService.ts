import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';
import {Headers, RequestOptions} from 'angular2/http';
import {User} from '../models/User';
import {IUserService} from './UserServiceProvider';


@Injectable()
export class UserService implements IUserService {

    constructor(private http: Http) {
        // https://github.com/angular/http/issues/65
        // TODO: Use official Angular2 CORS support when merged (https://github.com/angular/angular/issues/4231).
        let _build = (<any>http)._backend._browserXHR.build;
        (<any>http)._backend._browserXHR.build = () => {
            let _xhr = _build();
            _xhr.withCredentials = true;
            return _xhr;
        };
    }

    list(): Observable<any> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http
            .get('/users', options)
            .catch(this.handleError)
            .map(res => {
                if (res.status === 200) {
                    return { err: null, data:res.json().map( i => {
                        return new User(i.email);
                    }) };
                } else {
                    return { err: res.json() };
                }
            });
    }

    login(user: User): Observable<any> {

        let body = JSON.stringify({
            email: user.username,
            password: user.password
        });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http
            .post('/auth/login', body, options)
            .catch(this.handleError)
            .map(res => {
                if (res.status === 201) {
                    return { err: null, data: true };
                } else {
                    return { err: res.json() };
                }
            });
    }

    signup(user: User): Observable<any> {

        let body = JSON.stringify({
            email: user.username,
            password: user.password
        });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http
            .post('/auth/signup', body, options)
            .catch(this.handleError)
            .map(res => {
                if (res.status === 201) {
                    return { err: null, data: true };
                } else {
                    return { err: res.json() };
                }
            });
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }

}

