import { FoodInfoService } from "./food-info.service";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { MenuComponent } from "./menu/menu.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { AboutComponent } from "./about/about.component";
import { ReserveComponent } from "./reserve/reserve.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuComponent,
    GalleryComponent,
    AboutComponent,
    ReserveComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [FoodInfoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
