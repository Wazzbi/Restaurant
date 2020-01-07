import { ReserveComponent } from "./reserve/reserve.component";
import { AboutComponent } from "./about/about.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { MenuComponent } from "./menu/menu.component";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomePageComponent },
  { path: "menu", component: MenuComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "about", component: AboutComponent },
  { path: "reserve", component: ReserveComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
