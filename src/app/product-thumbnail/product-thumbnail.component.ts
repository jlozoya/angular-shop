import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss']
})
export class ProductThumbnailComponent implements OnInit {

  @Input() product: Product = {
    id: 0,
    name: '',
    price: '',
    available: false,
    best_seller: false,
    categories: [0],
    img: '',
    description: '',
  };

  detailViewActive: boolean = false;

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.detailViewActive = false;
  }

  onProductClick() {
    this.detailViewActive = !this.detailViewActive;
  }

  onAddToCart() {
    this.cartService.addProductToCart(this.product);
  }

}
