import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { MovieComponent } from './movie/movie.component';

import {TabViewModule} from 'primeng/tabview';
import {AccordionModule} from 'primeng/accordion';


import { HttpClientModule} from "@angular/common/http";

import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';



@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    MovieComponent,
    ProductComponent,
    AddProductComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TabViewModule,
    AccordionModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
