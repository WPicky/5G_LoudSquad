import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '@models/user';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const users = [
            {id: 1, login: 'martin'},
            {id: 2, login: 'martine'},
            {id: 3, login: 'jade'},
            {id: 4, login: 'thibault'},
            {id: 5, login: 'jimmy'},
        ];
        return {users};
    }
}
