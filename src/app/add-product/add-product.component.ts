import { Component, OnInit } from '@angular/core';
import { HttpClientService, Product } from '../service/http-client.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product('','','','','');

  constructor(
    private httpClientService: HttpClientService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  createProduct(): void {
  this.httpClientService.createProduct(this.product)
      .subscribe( data => {
        alert("product created successfully.");
        this.router.navigate(['products']);
      });
};

}
