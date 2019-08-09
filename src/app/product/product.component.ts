import { Component, OnInit } from '@angular/core';
import { HttpClientService, Product } from '../service/http-client.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getProducts().subscribe(
      response =>{this.products = response;}
    );
  }

  deleteProduct(product: Product): void {
  this.httpClientService.deleteProduct(product)
    .subscribe( data => {
      this.products = this.products.filter(u => u !== product);
    })
  };

  updateProduct(product: Product): void {
  this.httpClientService.updateProduct(product)
      .subscribe( data => {
        alert("product created successfully.");
      })
  };

}
