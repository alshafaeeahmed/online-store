import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './products/products.module';
import { CartsModule } from 'src/carts/carts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ProductsModule,
    CartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
