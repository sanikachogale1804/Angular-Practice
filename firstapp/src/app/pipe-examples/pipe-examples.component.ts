import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pipe-examples',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe],
  templateUrl: './pipe-examples.component.html',
  styleUrl: './pipe-examples.component.css'
})
export class PipeExamplesComponent {

  name:string="abc"
  lastname:string="SHELAR"
  currentDate=new Date();

}
