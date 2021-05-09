import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-displayproduct',
  templateUrl: './displayproduct.component.html',
  styleUrls: ['./displayproduct.component.css']
})
export class DisplayproductComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  productid:number;
  ngOnInit(): void {
    this.route.params.subscribe(d=>{
      this.productid=d.id as number
    })
  }

}
