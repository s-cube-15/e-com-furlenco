import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../pages/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartCount: number = 0;
  private cartSubscription: Subscription | undefined;
  url = 'http://localhost:3000/cart';

  constructor(
    private router: Router,
    private _http: HttpClient,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // Subscribe to cart count changes from service
    this.cartSubscription = this.cartService.cartCount$.subscribe((count) => {
      this.cartCount = count;
    });

    // Load initial cart count
    this._http.get<any[]>(this.url).subscribe((resp) => {
      const totalQuantity = resp.reduce(
        (total, item) => total + item.quantity,
        0
      );
      this.cartService.updateCartCount(totalQuantity);
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
