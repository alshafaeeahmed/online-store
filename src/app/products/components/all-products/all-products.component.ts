import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  loading: boolean = false;
  cartProducts: any[] = [];

  constructor(private servidce: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.servidce.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.router.navigate(['/error']);
      }
    );
  }

  getCategories() {
    this.loading = true;
    this.servidce.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res;
        this.loading = false;
      },

      (error) => {
        this.loading = false;
        this.router.navigate(['/error']);
      }
    );
  }

  filterCategorie(event: any) {
    let value = event.target.value;
    value == 'all' ? this.getProducts() : this.getProductCategorie(value);
  }

  getProductCategorie(categorieType: string) {
    this.loading = true;
    this.servidce
      .getProductByCategories(categorieType)
      .subscribe((res: any) => {
        this.products = res;
        this.loading = false;
      });
  }
  addToCart(event: any) {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      //check if 
      let exist=this.cartProducts.find(item=>item.item.id==event.item.id)
      if(exist){
        alert("Product is already in your cart")
      }else {
      this.cartProducts.push(event);
      //sending Data
      localStorage.setItem("cart", JSON.stringify(this.cartProducts));
      } 
    } else {
      this.cartProducts.push(event);
      localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    }
  }
}
