import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home.component';
import {ProjectRoutingModule} from "./app-routing.module";
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { PurchaseComponent } from './purchase.component';
import { FooterComponent } from './footer.component';
import { BrowseComponent } from './browse/browse.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PurchaseComponent,
    FooterComponent,
    BrowseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProjectRoutingModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
