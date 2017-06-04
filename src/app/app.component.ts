import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { routes } from './routes';
import { LoginService } from './services/login.service';
import { tokenNotExpired } from 'angular2-jwt';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  envName = environment.env_name;
  routes: Routes;

  loggedIn = false;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.loggedIn = this.getLoggedInState();
    this.routes = routes;
  }

  login() {
    this.router.navigate(['login']);
    this.getLoggedInState();
  }

  logout() {
    this.loginService.logout();
    this.getLoggedInState();
  }

  getLoggedInState(): boolean {
    return tokenNotExpired();
  }
}
