/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './routes';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { Observable } from 'rxjs/Observable';
import { ChartsModule } from 'ng2-charts/ng2-charts';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        APP_ROUTER_PROVIDERS,
        ChartsModule
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        ArticlesComponent,
        UsersComponent,
        LoginComponent,
      ],
      providers: [
        { provide: LoginService, useClass: LoginServiceSpy }
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.envName).toEqual('test');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});

class LoginServiceSpy {

  testData = {};

  login = jasmine.createSpy('login').and.callFake(
    () => Observable.create((observer) => {
      observer.onNext(this.testData);
      observer.onCompleted();
    })

  );

  logout = jasmine.createSpy('logout').and.callFake(
    () => Observable.create((observer) => {
      observer.onNext(this.testData);
      observer.onCompleted();
    })
  );
}
