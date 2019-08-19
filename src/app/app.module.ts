import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RatingModule } from 'ng-starrating';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
