import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor() { }

    getAll(): Array<User> {
        const users: User[] = [
            {id: 1, login: 'martin'},
            {id: 2, login: 'martine'},
            {id: 3, login: 'jade'},
            {id: 4, login: 'thibault'},
            {id: 5, login: 'jimmy'},
        ];

        return users;
    }
}
