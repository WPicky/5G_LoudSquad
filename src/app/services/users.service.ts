import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor() { }

    // private getAll(): Array<User> {
    //     const users: User[] = [
    //         {id: '1', login: 'martin'}
    //         ];
    //
    //     return users;
    // }
}
