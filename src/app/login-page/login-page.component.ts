import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }
  email: any;
  password: any;
  valid: any;

  ngOnInit() {
    this.valid = true;
  }

  login() {
    if (this.email == "aaa" && this.password == "123") {
      alert("Successfully logged in!");
      console.log(this.email)
      console.log(this.password)
      this.valid = true;
      this.router.navigate(['/home']);
    }
    else {
      alert("Password or Email incorrect!");
    }
  }
}
