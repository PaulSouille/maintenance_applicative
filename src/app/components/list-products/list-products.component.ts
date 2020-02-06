import { Component, OnInit } from '@angular/core';
import {Products} from './products';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  listProducts:Products[] = [];
  constructor(private httpclient: HttpClient) { }

  ngOnInit() {
    this.listProducts = this.getProducts();
  }

  // public async getProducts():Promise<Products[]>{

  //   return this.httpclient.get<Products[]>('/products').toPromise();

  // }

  public getProducts():Products[]{
    const products: Products[] = 
    [
      {id:'1',
      price:'15',
      date: new Date(), 
      image:'',
      name: 'vélo',
      description:'Un vélo permet de se déplacer facilement d\'un point A a un point B pas trop loins'
  },      {id:'1',
  price:'1000',
  date: new Date(), 
  image:'',
  name: 'Ordinateur',
  description:'Ordinateur pour gamer'
},      {id:'1',
price:'150',
date: new Date(), 
image:'',
name: 'Airpods',
description:'Pour écouter la musique comme un PRO'
},      {id:'1',
price:'2',
date: new Date(), 
image:'',
name: 'Pain au chocolat',
description:'Petit plaisir coupable du matin'
},      {id:'1',
price:'800',
date: new Date(), 
image:'',
name: 'Mac Book',
description:'Ordinateur pour les petits cerveaux'
},      {id:'1',
price:'1',
date: new Date(), 
image:'',
name: 'Pomme',
description:'Pour manger sain !'
},      {id:'1',
price:'15',
date: new Date(), 
image:'',
name: 'Tacos',
description:'Pour manger !'
},      {id:'1',
price:'2000',
date: new Date(), 
image:'',
name: 'Voiture',
description:'Pour se déplacer en tout sécurité'
},      {id:'1',
price:'80',
date: new Date(), 
image:'',
name: 'Chaise',
description:'Pour pouvoir s\'asseoir'
}
    ]
    return products
  }
}
