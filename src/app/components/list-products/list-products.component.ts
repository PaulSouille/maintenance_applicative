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
  price:'15',
  date: new Date(), 
  image:'',
  name: 'vélo',
  description:'Un vélo permet de se déplacer facilement d\'un point A a un point B pas trop loins'
},      {id:'1',
price:'15',
date: new Date(), 
image:'',
name: 'vélo',
description:'Un vélo permet de se déplacer facilement d\'un point A a un point B pas trop loins'
},      {id:'1',
price:'15',
date: new Date(), 
image:'',
name: 'vélo',
description:'Un vélo permet de se déplacer facilement d\'un point A a un point B pas trop loins'
},      {id:'1',
price:'15',
date: new Date(), 
image:'',
name: 'vélo',
description:'Un vélo permet de se déplacer facilement d\'un point A a un point B pas trop loins'
},      {id:'1',
price:'15',
date: new Date(), 
image:'',
name: 'vélo',
description:'Un vélo permet de se déplacer facilement d\'un point A a un point B pas trop loins'
},      {id:'1',
price:'15',
date: new Date(), 
image:'',
name: 'vélo',
description:'Un vélo permet de se déplacer facilement d\'un point A a un point B pas trop loins'
},      {id:'1',
price:'15',
date: new Date(), 
image:'',
name: 'vélo',
description:'Un vélo permet de se déplacer facilement d\'un point A a un point B pas trop loins'
},      {id:'1',
price:'15',
date: new Date(), 
image:'',
name: 'vélo',
description:'Un vélo permet de se déplacer facilement d\'un point A a un point B pas trop loins'
}
    ]
    return products
  }
}
