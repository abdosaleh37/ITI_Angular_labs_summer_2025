import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadData{
  products: any[] = [];

  async getAllProducts(): Promise<any[]> {
    const response = await fetch('/products.json');
    this.products = await response.json();
    return this.products;
  }

  async getProductById(id: any): Promise<any> {
    await this.getAllProducts();
    return this.products.find((p: any) => p.id === id);
  }
}
