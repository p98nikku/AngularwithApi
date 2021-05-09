import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
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
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  itemstoadd: products;

  constructor(private productservice : ProductService) { }
  addproductform: FormGroup;
  min:number=1;
  max:number=1000;
  stock:boolean;
  ngOnInit(): void {
    this.addproductform= new FormGroup({
      title: new FormControl(null,[Validators.required]),
      price: new FormControl(null,[PriceRangeValidator(this.min,this.max)]),
      quantity: new FormControl(null,[Validators.required]),
      colour: new FormControl(null,[Validators.required]),
      inStock: new FormControl(null,[Validators.required]),
      expiryDate: new FormControl(null,[Validators.required]),
    })
    this.booleanChecker();
  }
  booleanChecker(){
    this.addproductform.get('inStock')?.valueChanges.subscribe((data:string)=>{
      console.log(data);
      if(data==="true"){
        this.stock=true;
      }
      else if(data=="false")
      {
        this.stock=false;

      }
    });
  }
  addData():void{
    this.itemstoadd= this.addproductform.value;
    let productnew: products={
      id:11,
      title:this.itemstoadd.title,
      price:this.itemstoadd.price,
      quantity:this.itemstoadd.quantity,
      colour:this.itemstoadd.colour,
      inStock:this.stock,
      expiryDate:this.itemstoadd.expiryDate,
      
    }
    console.log(productnew);
    console.log("Form Data"+this.addproductform.value);
    this.productservice.createProducts(productnew).subscribe();
    this.reset();
  }
  reset() {
this.addproductform.reset();
  }

}
