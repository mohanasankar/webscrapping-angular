import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  productlist:any;
  constructor(private ProductService:ProductService){
    
  }
  ngOnInit(){
    
    this.productList();
  }
  productList(){
    this.productlist = this.ProductService.listproduct().subscribe(
      list=>{
        this.productlist = list
        console.log(this.productlist);
      }
    )

  }
}
