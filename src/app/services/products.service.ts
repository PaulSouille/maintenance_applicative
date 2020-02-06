import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Products } from '../components/list-products/products';


@Injectable()
export class ProductsService  {

  constructor(
    private http: HttpClient,

  ) {
   }

  findProducts(): Promise<Products[]> {

    return this.http.get<Products[]>('http://212.47.246.198:3002/products').toPromise();
  }
  addProduct(data): void{
    console.log(this.http.post('http://212.47.246.198:3002/products',{
      name:data.name,
      description:data.description,
      price:data.price
    }).toPromise());

  }





}