import {User} from '../models/User';
import {UserService} from './UserService';
import {Observable}     from 'rxjs/Observable';
import {OpaqueToken, provide} from 'angular2/core';

export interface IUserService {
    signup(user: User): Observable<any>;
    login(user: User): Observable<any>;
}

export let USER_SERVICE_PROVIDER = provide(UserService, { useClass: UserService });