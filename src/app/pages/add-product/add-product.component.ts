import { Component, Inject, NgModule, Optional } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, FormsModule, NgModel } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Products } from 'src/app/components/list-products/products';


@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent  {


  options: FormGroup;
  productForm = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    image: new FormControl()
  });
  
  constructor(
    private formBuilder: FormBuilder,
   ) {
      this.options = formBuilder.group({
        hideRequired: false,
        floatLabel: 'auto',
      });

    }  



  addProduct(){
    console.log(this.productForm.value);

    // this.postsService.addPost(new_post);
    this.productForm.reset();
    

  }
}
