import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: false,
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  item_price: number = 0;
  total: number = 0;
  rate: number = 0;
  item_count: number = 0;

  url = 'http://localhost:3000/cart';

  constructor(
    private _http: HttpClient,
    private _ts: Title,
    private cartService: CartService
  ) {
    this._http.get<any[]>(this.url).subscribe((resp) => {
      this.cart = resp;
      console.log(this.cart);
      this.updateItemCount();
      this.calculateTotal();
      this.calculatesubtotal();
    });
  }

  ngOnInit(): void {
    this._ts.setTitle('Cart');
  }

  calculateTotal() {
    console.log('Here');
    // console.log(this.total)
    this.total = 0;
    for (let i of this.cart) {
      this.total += i.price * i.quantity;
    }
  }

  calculatesubtotal(item_id: any = 'b43c') {
    console.log('Here');
    const item = this.cart.find((item) => item.id === item_id);
    if (item) {
      this.item_price = item.price;
      this.rate = item.price;
    }
  }

  increaseQuantity(item_id: any, increment: number = 1) {
    var it = this.cart.find((item) => item.id === item_id);
    console.log(it);
    if (it) {
      it.quantity = it.quantity + increment;
      this.calculateTotal();
      this.updateItemCount();
    }
  }

  decreaseQuantity(item_id: any, decrement: number = 1) {
    var it = this.cart.find((item) => item.id === item_id);
    console.log('decrease called');
    if (it && it.quantity > 1) {
      it.quantity -= decrement;
      this.calculateTotal();
      this.updateItemCount();
    }
  }

  updateItemCount() {
    // Calculate total quantity of all items
    this.item_count = this.cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    this.cartService.updateCartCount(this.item_count);
  }
  onClickDel() {
    for (let item of this.cart) {
      this._http.delete<any[]>(`${this.url}/${item.id}`).subscribe((resp) => {
        // Update the local cart state after successful deletion
        this.cart = this.cart.filter((item) => item.id !== item.id);
        this.updateItemCount();
        this.calculateTotal(); // Recalculate the total after removing the item
      });
    }
  }

  removeItem(item_id: any) {
    this._http.delete<any[]>(`${this.url}/${item_id}`).subscribe((resp) => {
      // Update the local cart state after successful deletion
      this.cart = this.cart.filter((item) => item.id !== item_id);
      this.updateItemCount();
      this.calculateTotal(); // Recalculate the total after removing the item
    });
  }
}
