import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/observable';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

  apiPath: string;

  constructor(private authService: AuthHttp) {
    this.apiPath = environment.api_route;
  }

  index(tablePath: string, params: any): Observable<any> {
    return this.authService.get(this.apiPath + tablePath, {search: params});
  }

  create(tablePath: string, params: any): Observable<any> {
    return this.authService.post(this.apiPath + tablePath, params);
  }

  filter(tablePath: string, params: any): Observable<any> {
    return this.authService.post(this.apiPath + tablePath + '/filter', params);
  }

  update(tablePath: string, params: any): Observable<any> {
    return this.authService.put(this.apiPath + tablePath + '/' + params.id, { data: params });
  }

  delete(tablePath: string): Observable<any> {
    return this.authService.delete(this.apiPath + tablePath);
  }

}
