import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {

  constructor(private router: Router) { }

  pMethod: any;
  payMethod: any;
  NoOfOrder: any;
  Address: any;
  Name: any;
  cardNumber: any;
  ExpiryDate: any;
  CSV: any;
  Amount: any;
  menuPrice: any;


  ngOnInit() {
    this.pMethod = false;
    this.menuPrice = window.localStorage.getItem("menuPrice");
    this.Amount = this.menuPrice * 0;

  }


  calculateAmount() {
    if (this.NoOfOrder == undefined || this.NoOfOrder=="" || this.NoOfOrder== null || this.NoOfOrder== '0') {
      this.Amount = '0';
    }
    else {
      this.Amount = this.menuPrice * this.NoOfOrder;
    }
  }


  back() {
    swal({
      title: 'Are you sure?',
      text: 'you want to cancel this order!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Cancel the order!'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/onlineOrders']);
      }
    })

  }
  paymentMethod() {
    if (this.payMethod == "Card") {
      this.pMethod = true;
    }
    else {
      this.pMethod = false;
    }

  }

  placeOrder() {
    if (this.NoOfOrder == undefined || this.Address == undefined || this.payMethod == undefined) {
      swal(
        'Oops...',
        'Please fill required fields!',
        'error'
      )

    }
    else if (this.payMethod == "Card" && (this.Name == undefined || this.cardNumber == undefined || this.ExpiryDate == undefined || this.CSV == undefined)) {
      swal(
        'Oops...',
        'Please fill required fields!',
        'error'
      )
    }
    else {
      swal({
        title: 'Are you sure?',
        text: 'you want to place this order!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Confirm it!'
      }).then((result) => {
        if (result.value) {
          swal(
            'Reserved!',
            'Your order submitted.',
            'success'
          )
        }
      })
    }
  }
}
