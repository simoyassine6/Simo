import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {ContactComponent} from "./contact.component";
import {AboutComponent} from "./about.component";
import {PurchaseComponent} from "./purchase.component";
import {BrowseComponent} from "./browse/browse.component";


const appRoutes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'about', component:AboutComponent},
  { path: 'purchase', component:PurchaseComponent},
  { path: 'browse', component:BrowseComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home/about', redirectTo: '/about'},
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class ProjectRoutingModule { }
