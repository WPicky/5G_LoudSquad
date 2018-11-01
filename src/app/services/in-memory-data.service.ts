import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '@models/user';
import { ApiResponse } from '@models/api-response';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: ApiResponse = {
      type: 'members',
      code: 'T0004',
      descritpion: 'Liste des utilisateurs inscrits',
      payload: [
        {id: 1, login: 'martin', status: {id: 1, name: 'Connecté(e)'}, avatar: 'https://randomuser.me/api/portraits/thumb/men/61.jpg'},
        {id: 2, login: 'martine', status: {id: 3, name: 'Déconnecté(e)'}, avatar: 'https://randomuser.me/api/portraits/thumb/women/62.jpg'},
        {id: 3, login: 'jade', status: {id: 1, name: 'Connecté(e)'}, avatar: 'https://randomuser.me/api/portraits/thumb/women/63.jpg'},
        {id: 4, login: 'thibault', status: {id: 3, name: 'Déconnecté(e)'}, avatar: 'https://randomuser.me/api/portraits/thumb/men/64.jpg'},
        {id: 5, login: 'jimmy', status: {id: 2, name: 'Absent(e)'}, avatar: 'https://randomuser.me/api/portraits/thumb/men/65.jpg'},
      ],
    };

    return {
      users,
    };
  }
}
