import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [DatePipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {
  product: any;
  image: any;

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('productId'));
    const response = await fetch('/products.json');
    const products = await response.json();
    this.product = products.find((p: any) => p.id === id);

    if (this.product && this.product.images && this.product.images.length > 0) {
      this.image = this.product.images[0];
    } else if (this.product && this.product.thumbnail) {
      this.image = this.product.thumbnail;
    }
  }

  changeImage(index: number): void {
    if (this.product && this.product.images && this.product.images[index]) {
      this.image = this.product.images[index];
    }
  }

  getStars(rating: number): { type: String }[] {
    const stars: {type: any} [] = [];
    const fullStars = Math.floor(rating);
    const hasQuartStar = (rating % 1) >= 0.1 && (rating % 1) < 0.4;
    const hasHalfStar = (rating % 1) >= 0.4 && (rating % 1) < 0.7;
    const hasThreeQuartStar = (rating % 1) >= 0.7 && (rating % 1) <= 0.9;

    for (let i = 0; i < fullStars; i++) {
      stars.push({ type: 'full'});
    }

    if (hasQuartStar && fullStars < 5) {
      stars.push({ type: 'quart'});
    }

    if (hasHalfStar && fullStars < 5) {
      stars.push({ type: 'half'});
    }

    if (hasThreeQuartStar && fullStars < 5) {
      stars.push({ type: 'threeQuart'});
    }

    while (stars.length < 5) {
      stars.push({ type: 'empty'});
    }

    return stars;
  }
}
