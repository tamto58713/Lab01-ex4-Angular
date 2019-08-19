import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listProducts = [
    {
      productName: "Leaf Rake",
      code: "GDN-0011",
      available: "Mar 19, 2016",
      price: "19.95",
      starRating: "0.62",
      ImageURL: "../assets/images/leaf-rake.jpg"
    },
    {
      productName: "Garden Cart",
      code: "GDN-0023",
      available: "Mar 18, 2016",
      price: "32.99",
      starRating: "0.81",
      ImageURL: "../assets/images/garden-cart.jpg"
    },
    {
      productName: "Hammer",
      code: "TBX-0048",
      available: "Mar 21, 2016",
      price: "8.99",
      starRating: "0.96",
      ImageURL: "../assets/images/hammer.jpg"
    }
    ,
    {
      productName: "Saw",
      code: "TBX-0022",
      available: "Mar 15, 2016",
      price: "11.55",
      starRating: "0.78",
      ImageURL: "../assets/images/saw.jpg"
    },
    {
      productName: "Video Game Controller",
      code: "GMG-0042",
      available: "Oct 15, 2015",
      price: "35.95",
      starRating: "0.9",
      ImageURL: "../assets/images/video-game-controller.jpg"
    }

  ]

}
