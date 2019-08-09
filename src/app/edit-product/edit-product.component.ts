import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientService, Product } from '../service/http-client.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {



  product: Product = new Product('','','','','');
  editForm: FormGroup;
  id: string;

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private httpClientService: HttpClientService
  ) { }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id); // Print the parameter to the console.
    this.editForm = this.formBuilder.group({
      productId : [''],
      label : ['', Validators.required],
      category : ['', Validators.required],
      price : ['', Validators.required],
      expirationDate : ['', Validators.required],
    });
    this.httpClientService.getProduct(this.id)
  .subscribe( data => {
    this.editForm.setValue(data);
  });
  }


onFormSubmit(form:NgForm) {
  this.httpClientService.updateProduct(this.editForm.value)
    .pipe()
    .subscribe(
      data => {
          alert('Product updated successfully.');
          this.router.navigate(['products']);
      },
      error => {
        alert(error);
      });
}
}
