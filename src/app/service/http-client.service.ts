import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Product{

constructor(
    public _id:any,
    public label:string,
    public category:string,
    public price,
    public expirationDate,
  ) {}

}

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) {
     }

  public getProducts()
  {
    console.log("test call");
    return this.httpClient.get<Product[]>('http://localhost:8080/products');
  }

  public getProduct(id: string){
  return this.httpClient.get<Product>("http://localhost:8080/products/"+ id);
}

  public deleteProduct(product) {
    console.log("delete");
    return this.httpClient.delete<Product>("http://localhost:8080/products/"+ product.productId);
  }

  public createProduct(product) {
    return this.httpClient.post<Product>("http://localhost:8080/products", product);
  }

  public updateProduct (product){
    return this.httpClient.put<Product>("http://localhost:8080/products/"+ product.productId, product);
  }


}
