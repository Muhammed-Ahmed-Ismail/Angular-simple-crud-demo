import { Component, OnInit } from '@angular/core';
import {Product} from "../../_models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 products:Product[]=[new Product(0,'iphone 13 ','iph-122',new Date(),10000,3,'image/as/as'),
   new Product(1,'ipad  ','ipd-122',new Date(),10000,2,'image/as/as'),
   new Product(2,'tesla 13 ','tsl-122',new Date(),10000,1,'image/as/as')
 ]

  addedProduct:Product=new Product();
  editedProduct:Product=new Product();
  editingProductIndex:number=0;
  editing:boolean=false;
  displayModal: boolean=false;
  display: boolean = false;

  showImages:boolean=false

  showModalDialog() {
    this.editing=false
    this.displayModal = true;
  }

  selectedProduct:string='';
  constructor() { }

  ngOnInit(): void {
  }

 toggleShowImages()
 {
   this.showImages=(!this.showImages);
 }
  add()
  {
    this.displayModal=false

    this.products.push(new Product(this.addedProduct.id,this.addedProduct.name,this.addedProduct.code,this.addedProduct.available,this.addedProduct.price,this.addedProduct.rating))
    console.log(this.products)
  }
  delete(id:number)
  {
    let indexOfItemToDelete=this.products.findIndex(product=>{
      return product.id === id;
    })
    this.products.splice(indexOfItemToDelete,1);
  }

  edit(id:number)
  {
    this.editing=true;
    let indexOfItemToEdit=this.products.findIndex(product=>{
      return product.id === id;
    })
    this.editingProductIndex=indexOfItemToEdit;
    this.editedProduct=this.products[indexOfItemToEdit]
    this.displayModal=true
  }

  save()
  {
    this.products.splice(this.editingProductIndex,1,this.editedProduct)
    this.editing=false;
    this.displayModal=false;
  }


}
