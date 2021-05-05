import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient) {
    this.loadUsers();
  }

  public users: GitHubUser[];

  public async loadUsers() {
    const url = 'https://api.github.com/repos/mcf1110/ionic-anhembi-2021.1/stargazers';
    const result = await this.http.get<GitHubUser[]>(url).toPromise(); // converte em promise
    this.users = result;
  }

}
