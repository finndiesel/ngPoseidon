import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, RequestOptionsArgs, Headers, RequestOptions } from '@angular/http';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class LoginService {

  constructor(private http: Http, private router: Router, public snackBar: MdSnackBar) {}

  login(email: string, password: string) {
    let headers: any      = new Headers({'Access-Control-Allow-Origin': '*'}); // ... Set content type to JSON
    const options       = new RequestOptions({ headers: headers });
    headers = {header: {'Access-Control-Allow-Origin': '*'}}
    return this.http.post('http://localhost:3000/admin/api/authentication?email=' + email + '&password=' + password,
      {},
      headers
    ).subscribe(
      (data: any) => {
        localStorage.setItem('id_token', JSON.parse(data._body).auth_token);
        this.router.navigate(['']);
        this.snackBar.open('Great Success!!! You are logged in!', 'Dismiss', {
          duration: 5000,
        });
      },
      (err: any) => {
        console.error("Failed to login")
        this.snackBar.open('Authentication Failed', 'Dismiss', {
          duration: 5000,
        });
      }
    );
  }

  logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['login']);
  }

}
