import { Dish } from "./../dish";
import { FoodInfoService } from "./../food-info.service";
import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  menu: Dish[];

  constructor(
    private location: Location,
    private foodService: FoodInfoService
  ) {}

  ngOnInit() {
    this.getFoods();
  }

  goBack(): void {
    this.location.back();
  }

  getFoods(): void {
    this.menu = this.foodService.getFoods();
    console.log(`položek v menu ${this.menu.length}`);
  }
}
