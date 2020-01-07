import { DISHES } from "./dishes";
import { Dish } from "./dish";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FoodInfoService {
  constructor() {}

  getFoods(): Dish[] {
    return DISHES;
  }
}
