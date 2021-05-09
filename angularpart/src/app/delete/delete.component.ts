import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { products } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
    deleteproductform: FormGroup;
    itemdelete: products;
    x:boolean = false;
    y:boolean = true;
    div:boolean=false;
    constructor(private productservice : ProductService) { }
   
    ngOnInit(): void {
      this.deleteproductform = new FormGroup({
        id: new FormControl(),
        title: new FormControl(null, []),
        price: new FormControl(null, []),
        quantity: new FormControl(null, []),
        colour: new FormControl(null, []),
        expiryDate: new FormControl(null, []),
        inStock: new FormControl(null, [])
      })
    }
    deletedata(): void {
      this.itemdelete = this.deleteproductform.value;
      console.log(this.itemdelete);
      this.productservice.deleteProducts(this.itemdelete.id).subscribe();
   
      this.reset();
    }
    findproduct(){
      this.div=true;
      this.x =true;
      this.y = false;
      this.itemdelete=this.deleteproductform.value;
       this.productservice.getProductsbyid(this.itemdelete.id).subscribe(
         data=> {console.log(data);
        this.deleteproductform.get('title')?.setValue(data.title);
        this.deleteproductform.get('price')?.setValue(data.price);
        this.deleteproductform.get('quantity')?.setValue(data.quantity);
        this.deleteproductform.get('colour')?.setValue(data.colour);
        this.deleteproductform.get('expiryDate')?.setValue(data.expiryDate);
        this.deleteproductform.get('inStock')?.setValue(data.inStock);
        // this.deleteproductform.get('inStock')?.setValue(data.inStoc);
        }
       );
    }
    reset(): void {
      this.div=false;
      this.x =false;
      this.y = true;
      this.deleteproductform.reset();
    }
  
}
