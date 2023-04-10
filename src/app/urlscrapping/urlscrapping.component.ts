import { Component } from '@angular/core';
import{ FormGroup,FormControl} from '@angular/forms'
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-urlscrapping',
  templateUrl: './urlscrapping.component.html',
  styleUrls: ['./urlscrapping.component.css']
})
export class UrlscrappingComponent {

  inputValue:any;
    scrapForm: FormGroup;
 productlist:any;
 list:any;
    constructor(private ProductService:ProductService) {
      this.scrapForm = new FormGroup({
        myInput: new FormControl('')
      });
    }
    onSubmit() {
      const myInputControl = this.scrapForm.get('myInput');
      console.log(myInputControl);
      if (myInputControl) {
        this.inputValue = myInputControl.value;
        console.log(this.inputValue);
        const jsonObject = {
          "list": {
            "url": this.inputValue
          }
        };
        console.log('data',jsonObject)
        this.productlist = this.ProductService.addproduct(jsonObject).subscribe(
          
          list=>{
            this.productlist = list
            console.log(this.productlist);
          }
        )
      }
    }

}
