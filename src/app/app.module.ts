import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { UrlscrappingComponent } from './urlscrapping/urlscrapping.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    UrlscrappingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
