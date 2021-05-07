import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { products } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-observablelist',
  templateUrl: './observablelist.component.html',
  styleUrls: ['./observablelist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservablelistComponent implements OnInit, OnChanges {
  @Input() Products$: Observable<products[]>;
  productlists: products[] = [];
  productsub: Subscription;

  constructor(private cd: ChangeDetectorRef,private productservice : ProductService) {
    this.Products$ = new Observable<products[]>();
    this.productsub = new Subscription();
  }
  deleteProd(id:number){
    this.productservice.deleteProducts(id).subscribe();
  }
  ngOnInit() {
    this.productsub = this.Products$.subscribe(
      (data) => {
        this.productlists = data;
        this.cd.markForCheck();
        console.log(this.productlists);
      },

      (error) => {
        console.log(error);
      },
      () => console.log('complete')
    );
  }

  ngOnChanges() {
    this.productsub = this.Products$.subscribe((data) => {
      this.productlists = data;
      this.cd.markForCheck();
    });
  }

  ngOnDestroy(){
    if(this.productsub)
    {
      this.productsub.unsubscribe();
    }
  }
  displayedColumns: string[] = ['ID', 'TITLE', 'PRICE','QUANTITY','COLOR','INSTOCK' ,'EXPIRYDATE'];
}
