import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Orders } from './orders';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = new Array<Orders>();
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  constructor() {}

  updateCartCount(count: number) {
    this.cartCountSubject.next(count);
  }

  getCartCount(): number {
    return this.cartCountSubject.value;
  }
}
