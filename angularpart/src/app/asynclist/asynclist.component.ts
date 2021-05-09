import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { products } from '../Product';

@Component({
  selector: 'app-asynclist',
  templateUrl: './asynclist.component.html',
  styleUrls: ['./asynclist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsynclistComponent implements OnInit {

  @Input() Products$$: Observable<products[]>;

  constructor() {
    this.Products$$ = new Observable<products[]>();
   }

  ngOnInit(){
  }

}
