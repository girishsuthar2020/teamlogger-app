import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: any;

  constructor(private router: Router, private _fb: FormBuilder) {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this._fb.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    });
  }

  public login() {
    debugger
    console.log("Login Form Details", this.loginForm.value);

    this._navigate('/homepage');
  }

  _navigate(path: string, params?: Object) {
    this.router.navigate([path], params); /* { skipLocationChange: true } */
  }
}
