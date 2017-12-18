import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }
  Mobile: any;
  password: any;
  valid: any;
  loggedin:any;

  ngOnInit() {
    this.valid = true;
  }

  login() {
    if (this.Mobile == "0710933763" && this.password == "123") {
      swal({
        type: 'success',
        title: 'Successfully logged in!',
        showConfirmButton: false,
        timer: 1000
      })
      this.router.navigate(['/home']);
      this.loggedin=true;
      window.localStorage.setItem("login", this.loggedin);
    }
    else {
      console.log(this.Mobile+" "+this.password);

      swal(
        'Oops...',
        'Username or Password Incorrect!',
        'error'
      )
    }
  }
}
