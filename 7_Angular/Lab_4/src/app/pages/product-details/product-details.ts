import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { LoadData } from '../../sevices/load-data';
import { GetStars } from '../../sevices/get-stars';

@Component({
  selector: 'app-product-details',
  imports: [DatePipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {
  private loadDataService = inject(LoadData);
  private getStarsService = inject(GetStars);
  product: any;
  image: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  async ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('productId'));
    this.product = await this.loadDataService.getProductById(id);

    if(!this.product) {
      this.router.navigate(['/not-found']);
    }
    this.image = this.product?.images?.[0] || this.product?.thumbnail;
  }

  getStars(rating: number): {type: String}[] {
    return this.getStarsService.getStars(rating);
  }

  changeImage(index: number){
    this.image = this.product?.images?.[index] || this.product?.thumbnail;
  }
}
