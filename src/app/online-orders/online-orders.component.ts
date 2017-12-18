import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-online-orders',
  templateUrl: './online-orders.component.html',
  styleUrls: ['./online-orders.component.css']
})
export class OnlineOrdersComponent implements OnInit {

  constructor(private router: Router) { }
  menus: any;

  ngOnInit() {
    this.menus = [{
      title:'Menu 1-Non Vegetarian',
      items:
      ['Fried Rice',
      'Chicken',
      'Chopsuey',
      'Chilli paste',
      'Soya meat',
      'Egg'
    ],
    price:'300'
    },
    {
      title:'Menu 2-Vegetarian',
      items:
      ['Fried Rice',
      'Chopsuey',
      'Chilli paste',
      'Soya meat',
      'Dhal',
      'Papadam'
    ],
    price:'200'
    },
    {
      title:'Menu 3- Non Vegetarian',
      items:
      ['White Rice',
      'Chicken',
      'Dhal',
      'Fried potatoes',
      'Papadam',
      'Vegetable salad'
    ],
    price:'200'
    }
  ]
  }

  OrderSelection(price){
    this.router.navigate(['/placeOrder']);
    window.localStorage.setItem("menuPrice", price);
  }

  back(){
    this.router.navigate(['/home']);
  }
}
