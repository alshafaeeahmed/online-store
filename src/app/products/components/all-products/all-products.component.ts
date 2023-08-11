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
  constructor(private servidce: ProductsService, private router: Router) {}
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
  getProducts() {
    this.servidce.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
      },
      (error) => {
        this.router.navigate(['/error']);
      }
    );
  }
  getCategories() {
    this.servidce.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res;
        console.log(res);
      },
      (error) => {
        this.router.navigate(['/error']);
      }
    );
  }
  filterCategorie(event: any) {
    let value = event.target.value;
    value == 'all' ? this.getProducts(): this.getProductCategorie(value);
  }
  getProductCategorie(categorieType: string) {
    this.servidce
      .getProductByCategories(categorieType)
      .subscribe((res: any) => {
        this.products = res;
      });
  }
}
