import {User} from '../models/User';
import {UserService} from './UserService';
import {UserService2} from './UserService2';
import {Observable}     from 'rxjs/Observable';
import {OpaqueToken, provide} from '@angular/core';

export interface IUserService {
    signup(user: User): Observable<any>;
    login(user: User): Observable<any>;
    list(): Observable<any>;
}

export let USER_SERVICE_PROVIDER = provide(UserService, { useClass: UserService });