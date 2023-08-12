import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/carts/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  item: any;
  total: number = 0;
  cartProducts: any[] = [];
  success: boolean = false;
  constructor(private service: CartService) {}
  ngOnInit(): void {
    this.getCartProduct();
  }

  minsAmount(index: any) {
    this.cartProducts[index].quantity--;
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  addAmount(index: number) {
    this.cartProducts[index].quantity++;
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  detectChang(index: number) {
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  getCartProduct() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      this.getCartTotal();
    }
  }
  getCartTotal() {
    this.total = 0;
    for (let x in this.cartProducts)
      this.total +=
        this.cartProducts[x].item.price * this.cartProducts[x].quantity;
  }
  detectProduct(index: number) {
    this.cartProducts.splice(index, 1);
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  clearCart() {
    this.cartProducts = [];
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  addCart() {
    let products = this.cartProducts.map((item) => {
      return { productId: item.item.id, quantity: item.quantity };
    });
    let Model = {
      userId: 5,
      date: new Date(),
      product: [],
    };
    this.service.creatNewCart(Model).subscribe((res) => {
      this.success=true
    });
    console.log(Model);
  }
}
