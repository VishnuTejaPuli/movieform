import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  product: Product = new Product('', '', '', 0, 0);

  constructor(private productService: ProductService) {}

  onSubmit() {
    console.warn(this.product);
    //this.productService.saveProduct(this.product);
    this.productService.saveProduct(this.product).subscribe(
      
          (data) => {   console.log('received from API ,the Product object',data); },
          (error)=> { console.error(error);}
  );
    //  products.push(product);
  }
}
