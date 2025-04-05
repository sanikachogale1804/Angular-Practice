import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category_component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AdditionComponent } from './addition/addition.component';
import { PipeExamplesComponent } from './pipe-examples/pipe-examples.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AboutComponent,ServiceComponent,ProductComponent,CategoryComponent,DataBindingComponent,AdditionComponent,PipeExamplesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name:string="Sanika"
}
