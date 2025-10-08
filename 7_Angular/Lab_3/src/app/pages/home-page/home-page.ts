import { Component, OnInit } from '@angular/core';
import { Card } from "../../components/card/card";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [Card, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage implements OnInit {
  products: any[] = [];

  async ngOnInit() {
    const response = await fetch('products.json');
    this.products = await response.json();
  }
}
