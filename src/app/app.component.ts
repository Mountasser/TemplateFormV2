import { Model } from './Model';
import { Product } from './Product.model';
import {ApplicationRef, Component, ViewEncapsulation } from "@angular/core";
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,

})
export class AppComponent {
selectedProduct:string;
selectedProduct2:string;
newProduct:Product= new Product();
formSubmitted : boolean = false;
get jsonProduct(){
  return JSON.stringify(this.newProduct);
}
addProduct(p:Product){
  console.log("New Product :"+ this.jsonProduct)
}
model:Model = new Model();
constructor(ref:ApplicationRef){
(<any>window).appRef = ref;
(<any>window).model = this.model;
}
getProductByPosition(position:number): Product{
  return this.model.getProducts()[position];
}
getProduct(key: number):Product{
return this.model.getProduct(key);
}
getProducts():Product[]{
  return this.model.getProducts();
  }
  getProductCount(): number{
    return this.model.getProducts().length;
  }
  getSelected(product:Product):boolean{
    return product.name == this.selectedProduct;
  } 
  
  
  getValidationMessages(state: any,thingName?:string){

    let thing: string = state.path || thingName;
    let messages : string[] = [];
    console.log(state.errors)
    if(state.errors){
      for(let errorName in state.errors){
        switch(errorName){
        case "required":
          messages.push(`You must enter a ${thing}`);
          break;
        case "minlength":
          messages.push(`A ${thing} must ve at least ${state.errors['minlength'].requiredLength} characters`);
          break;     
          case "pattern":
          messages.push(`The ${thing} contains illegal characters`);
          break;
        }
      
        }
    }
    return messages;
  }

  submitForm(form : NgForm){
    this.formSubmitted = true;
    if(form.valid){
   this.addProduct(this.newProduct);
   this.newProduct = this.newProduct;
   form.reset();
   this.formSubmitted = false;
    }
  }
}
