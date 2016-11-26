import {User} from '../models/User';
import {Observable}     from 'rxjs/Observable';

export interface IUserService {
    signup(user: User): Observable<any>;
    login(user: User): Observable<any>;
    list(): Observable<any>;
}

