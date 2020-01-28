import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ManageDataService {
  constructor() {}

  productList = [
    {
      id: 1,
      name: "Echo Dot",
      price: 100,
      description: "Lorem Ipsum Doller Sit Amet da de Vinci",
      image: "2.jpg"
    },
    {
      id: 2,
      name: "Macbook Pro",
      price: 360,
      description: "Lorem Ipsum Doller Sit Amet da de Vinci",
      image: "3.jpg"
    },
    {
      id: 3,
      name: "Apple Watch",
      price: 150,
      description: "Lorem Ipsum Doller Sit Amet da de Vinci",
      image: "4.jpg"
    },
    {
      id: 4,
      name: "Sandisk Pendrive",
      price: 60,
      description: "Lorem Ipsum Doller Sit Amet da de Vinci",
      image: "1.jpg"
    }
  ];

  cartList: any = [];

  addCardList(data) {
    this.cartList.push(data);
  }

  getData() {
    return this.productList;
  }
}
