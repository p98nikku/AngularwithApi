import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { products } from '../Product';
import { ProductService } from '../product.service';

function PriceRangeValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value !== undefined && (isNaN(control.value) || control.value < 0 || control.value > 100000)) {
      return { "priceerror": true };
    }
    return null;
  }
}
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 
  itemupdate: products;
  itemUpdate : products;
  constructor(private productservice: ProductService,private route:ActivatedRoute) { }
  updateproductform: FormGroup;
  min: number = 1;
  max: number = 100000;
  stock: boolean;
  x:boolean=false;
  y:boolean=true;
  div:boolean=false;
  ngOnInit(): void {
   
    this.updateproductform = new FormGroup({      
      id: new FormControl(null, [Validators.required]),
      title: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [PriceRangeValidator(this.min, this.max)]),
      quantity: new FormControl(null, [Validators.required]),
      colour: new FormControl(null, [Validators.required]),
      expiryDate: new FormControl(null, [Validators.required]),
      inStock: new FormControl(true, [Validators.required])
    })
    this.booleanchecker();
    this.itemupdate = this.updateproductform.value;
   // this.route.parent?.params.subscribe(d=>{this.itemupdate.id=d['id']})
  }
  booleanchecker() {
 
    this.updateproductform.get('inStock')?.valueChanges.subscribe((data: string) => {
      console.log(data);
      if (data === "true") {
        this.stock = true;
 
      }
      else if (data === "false") {
        this.stock = false;
      }
    });
  }
  findproduct(){
    this.div=true;
    this.x =true;
    this.y = false;
    this.itemUpdate=this.updateproductform.value;
     this.productservice.getProductsbyid(this.itemUpdate.id).subscribe(
       data=> {console.log(data);
      this.updateproductform.get('title')?.setValue(data.title);
      this.updateproductform.get('price')?.setValue(data.price);
      this.updateproductform.get('quantity')?.setValue(data.quantity);
      this.updateproductform.get('colour')?.setValue(data.colour);
      this.updateproductform.get('expiryDate')?.setValue(data.expiryDate);
      this.updateproductform.get('inStock')?.setValue(data.inStock);
      }
     );
  }
  updatedata(): void {
    let productNEW : products=this.updateproductform.value;
    let product1: products = {
      id: productNEW.id,
      title: productNEW.title,
      price: productNEW.price,
      quantity: productNEW.quantity,
      expiryDate: productNEW.expiryDate,
      colour: productNEW.colour,
      inStock: this.stock,
    }
    console.log(product1);
    this.productservice.putProducts(product1).subscribe();
    this.reset();
  } 
  reset(): void {
    this.x=false;
    this.y=true;
    this.div=false;
    this.updateproductform.reset();
  }
}