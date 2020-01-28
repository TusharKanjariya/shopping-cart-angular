import { Component } from "@angular/core";
import "hammerjs";
import { ManageDataService } from "./manage-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "cart-app";
  constructor(public service: ManageDataService) {}
  badgeVal: any;
  ngOnInit() {}
}
