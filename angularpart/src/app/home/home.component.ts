import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { products } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemlist:Observable<products[]>
  constructor(private productservice :ProductService) {
    this.itemlist= new Observable<products[]>();
   }

  ngOnInit(): void {
    this.itemlist= this.productservice.getProducts();
  }
  displayedColumns: string[] = ['Id', 'Title', 'Price', 'Quantity','Colour','InStock','ExpiryDate'];

}
