import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/product.model';
import { CartService } from '../cart.service';
import { ProductThumbnailComponent } from '../product-thumbnail/product-thumbnail.component';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  imports: [
    ProductThumbnailComponent,
  ]
})
export class ShowcaseComponent implements OnInit {

  @Input() products: Product[] = [];

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
  }
}
