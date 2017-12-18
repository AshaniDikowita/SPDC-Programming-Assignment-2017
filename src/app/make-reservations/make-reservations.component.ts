import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-reservations',
  templateUrl: './make-reservations.component.html',
  styleUrls: ['./make-reservations.component.css']
})
export class MakeReservationsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Date: any;
  NoOfPeople: any;
  Time: any;

  back(){
    this.router.navigate(['/home']);
  }
  makereservation() {
    if (this.Date == undefined || this.Time == undefined || this.NoOfPeople == undefined) {
      swal(
        'Oops...',
        'Please fill required fields!',
        'error'
      )
    }
    else {
      swal({
        title: 'Are you sure?',
        // text: 'On '+this.Date +'\n At'+ this.Time + '\n No of People :'+ this.NoOfPeople,
        html: 'On ' + this.Date + '<br><br> At ' + this.Time + '<br><br>No of People : ' + this.NoOfPeople,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Confirm it!'
      }).then((result) => {
        if (result.value) {
          swal(
            'Reserved!',
            'Your request submitted.',
            'success'
          )
        }
      })
    }
  }
}


