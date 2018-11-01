import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { User, UserStatus } from '../../../models/user';
import { ApiResponse } from '@models/api-response';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: User[];
  filteredUsers: User[];
  usersFilters = {
    login: [],
    status: [],
  };
  statusColor: Object;

  constructor(private usersService: UsersService) {
    this.statusColor = {
      1: 'success',
      2: 'warning',
      3: 'danger',
    };
  }

  ngOnInit() {
    this.usersService.currentSelectedStatuses.subscribe(statuses => {
      this.usersFilters.status = statuses;
      this.filteredUsers = this.filterList(this.users, this.usersFilters);
    });
    this.usersService.currentSearchedLogin.subscribe(login => {
      this.usersFilters.login = [login];
      this.filteredUsers = this.filterList(this.users, this.usersFilters);
    });

    this.getAllUsers();
  }

  getAllUsers(): void {
    this.usersService.getAll()
      .subscribe((res: ApiResponse) => {
        this.users = res.payload;
        this.filteredUsers = this.users;
      });
  }

  filterList(arr: Object[], filters: Object): Array<any> {
    if (!arr) {
      return;
    }

    const filterKeys = Object.keys(filters);
    return arr.filter(eachObj => {
      return filterKeys.every(eachKey => {
        // Si on passe un tableau vide, ou un tableau avec une chaine vide, on ignore le filtre
        if (!filters[eachKey].length || filters[eachKey][0] === '') {
          return true;
        }

        // Si on filtre sur un objet contenant un Id, alors on filtre sur cet id
        if ((eachObj[eachKey] || {}).id) {
          return filters[eachKey].includes(eachObj[eachKey].id);
        }

        // Si on filtre sur une string, alors on vérifie que cette chaine contient la valeur du filtre
        if (typeof eachObj[eachKey] === 'string') {
          return eachObj[eachKey].includes(filters[eachKey][0]);
        }

        return filters[eachKey].includes(eachObj[eachKey]);
      });
    });
  }
}
