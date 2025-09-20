
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FiltersComponent } from './filters/filters.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { CartComponent } from './cart/cart.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { SortFiltersComponent } from './sort-filters/sort-filters.component';

import { DataService } from './data.service';
import { CartService } from './cart.service';
import { UrlFormComponent } from './url-form/url-form.component';

@NgModule({
  providers: [
    CartService
  ],
})
export class AppModule { }
