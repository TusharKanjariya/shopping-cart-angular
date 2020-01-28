import { Component, OnInit } from "@angular/core";
import { ManageDataService } from "../manage-data.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  constructor(private service: ManageDataService) {}

  displayedColumns: string[] = ["image", "name", "price", "count", "total"];
  dataSource = this.service.cartList;
  total: any = [];
  finalTotal: any = 0;
  sum: number = 0;
  ngOnInit() {
    this.findTotal();
  }

  ngOnChanges() {
    this.findTotal();
  }

  findTotal() {
    this.sum = 0;
    console.log(this.total);
    for (const val in this.total) {
      this.sum += parseInt(this.total[val]) + 0;
    }
  }
}
