import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { tokenNotExpired } from 'angular2-jwt';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = {
    email: '',
    password: ''
  }

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    if (tokenNotExpired()) {
      this.router.navigate(['']);
    }
  }

  submitForm(form: any) {
    this.loginService.login(form.value.email, form.value.password);
  }

}
