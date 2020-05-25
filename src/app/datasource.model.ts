import { Product } from './Product.model';

export class SimpleDtaSource {
    private data: Product[];
    constructor(){
        this.data= new Array<Product>(
            new Product(1,"Kayak","Watersports",275),
            new Product(2,"LifeJacket","Watersports",40),
            new Product(3,"Soccer","Watersports",50),
            new Product(4,"Corner Cap","Watersports",60));


    }

    getData():Product[]{
return this.data;
    }
}
