import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFilterPipe } from './shared/pipes/search-filter.pipe';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoComponent } from './shared/components/logo/logo.component';
import { OptionsComponent } from './shared/components/options/options.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    ProductListComponent,
    SearchFilterPipe,
    LogoComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AppModule { }
