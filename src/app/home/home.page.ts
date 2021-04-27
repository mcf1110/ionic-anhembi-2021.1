import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public users = [];

  constructor(private http: HttpClient) {
    this.fetchUsers();
  }

  public async fetchUsers() {
    const url = 'https://api.github.com/repos/mcf1110/ionic-anhembi-2021.1/stargazers';
    const result = await this.http.get(url).toPromise() as any;

    this.users.push(...result);
  }

}
