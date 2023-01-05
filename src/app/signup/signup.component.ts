import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  singup!: FormGroup;
  constructor(private _http: HttpClient,private _router:Router) {}
  ngOnInit(): void {
    this.singup = new FormGroup({
      Fname: new FormControl(),
      Lname: new FormControl(),
      password: new FormControl(),
      email: new FormControl(),
    });
  }
  signupdata(signup: FormGroup) {
    this._http
      .post<any>('http://localhost:3000/signup', this.singup.value)
      .subscribe((req) => {
        alert('signup success');
        this.singup.reset;
        this._router.navigate(['login'])
      });
  }
}
