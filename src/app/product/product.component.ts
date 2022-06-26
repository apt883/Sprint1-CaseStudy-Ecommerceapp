import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
public productList:any;
  constructor(private _apiservice :ApiService) { }

  ngOnInit(): void {
    this._apiservice.getProduct()
    .subscribe(res=>{
      this.productList=res;
    })
  }

}
