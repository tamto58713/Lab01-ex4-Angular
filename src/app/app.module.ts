import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    RatingModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'products/:productId', component: DetailProductComponent },
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
