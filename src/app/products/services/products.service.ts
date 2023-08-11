import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get("https://fakestoreapi.com/products");
  }
  getAllCategories() {
    return this.http.get("https://fakestoreapi.com/products/categories");
  }
  getProductByCategories(keyword: string) {
    return this.http.get("https://fakestoreapi.com/products/category/" + keyword);
  }
  getProductById(id:any) {
    return this.http.get("https://fakestoreapi.com/products/"+id);
  }
}
