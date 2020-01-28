import { Component, OnInit } from "@angular/core";
import { ManageDataService } from "../manage-data.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  constructor(private service: ManageDataService) {}

  products: any;

  getProducts() {
    this.products = this.service.getData();
  }

  ngOnInit() {
    this.getProducts();
  }

  addCart(data) {
    let flag = 0;
    if (this.service.cartList.length === 0) {
      this.service.cartList.push(data);
    } else {
      for (let key of this.service.cartList) {
        if (data.id === key.id) {
          flag = 1;
          console.log("this");
        }
      }
      if (flag == 0) {
        this.service.cartList.push(data);
      }
    }
    console.log(this.service.cartList);
  }
}
