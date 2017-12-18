import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  isLoggedIn:any;
  

  ngOnInit() {
      this.isLoggedIn = false;
      if(window.localStorage.getItem("login")){
        this.isLoggedIn = false;
      }
  }



}


