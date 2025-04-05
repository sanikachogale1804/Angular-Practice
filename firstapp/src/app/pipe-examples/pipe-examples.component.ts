import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-examples',
  imports: [UpperCasePipe],
  templateUrl: './pipe-examples.component.html',
  styleUrl: './pipe-examples.component.css'
})
export class PipeExamplesComponent {

  name:string="abc"
  

}
