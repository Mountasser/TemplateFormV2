import { SimpleDtaSource } from './datasource.model';
import { Product } from './Product.model';

export class Model{


    private datasource : SimpleDtaSource;
    private products : Product[];
    private locator = (p: Product,id:number) => p.id == id;

    constructor(){
        this.datasource = new SimpleDtaSource();
        this.products = new Array<Product>();
        this.datasource.getData()
        .forEach(p=>this.products.push(p))
    }
    getProducts():Product[]{
        return this.products;
    }
    getProduct(id:number):Product{
return this.products.find(p=>p.id==id);
   }
   saveProduct(product : Product){
       if(product.id ==0 || product.id == null){
           product.id = this.generateID();
           this.products.push(product);
       }else {
           let index = this.products
           .findIndex(p=>this.locator(p,product.id));
           this.products.splice(index,1,product);

       }

       }

       deleteProduct(id: number) {
        let index = this.products.findIndex(p => this.locator(p, id));
        if (index > -1) {
            this.products.splice(index, 1);
        }
    }

    private generateID(): number {
        let candidate = 100;
        while (this.getProduct(candidate) != null) {
            candidate++;
        }
        return candidate;
    }

    swapProduct() {
        let p = this.products.shift();
        this.products.push(new Product(p.id, p.name, p.category, p.price));
    }	
   }
