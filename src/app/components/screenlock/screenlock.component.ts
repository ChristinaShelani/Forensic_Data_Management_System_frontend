import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/service/user.service';
import { TokenService } from 'app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'app/service/auth.service';

@Component({
  selector: 'app-screenlock',
  templateUrl: './screenlock.component.html',
  styleUrls: ['./screenlock.component.scss']
})
export class ScreenlockComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };

  public error = null;
  screenlock: boolean;

  constructor(
    private Users: UserService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
  ) { 
    console.log(Auth.getstatus());
    }

  onSubmit() {
    this.Users.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),
    );
  }

  handleResponse(data) {
    console.log('sucses');
    
    if (this.Token.screenunlock(data.access_token)) {
      console.log('5' + this.Auth.getstatus());
      this.Auth.changescreenlockStatus(false);
      console.log('6' + this.Auth.getstatus());
      console.log('7' + this.Auth.getstatus() +'mach');
      localStorage.setItem('lock', 'unlock');
      const url = this.Token.geturl()
      localStorage.removeItem('flink');
      this.router.navigateByUrl(url);
      
    }
    else{
      console.log('invalid user');
      this.router.navigateByUrl('lock');
    }
  }

  handleError(error) {
    this.error = error.error.error;

  }
  ngOnInit() {
    this.Auth.screenlockStatus.subscribe(value => this.screenlock = value)
  }
}
