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
  constructor(private servidce: ProductsService, private router: Router) {}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.servidce.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        console.log(res);
      },
      (error) => {
        this.router.navigate(['/error']);
      }
    );
  }
}
