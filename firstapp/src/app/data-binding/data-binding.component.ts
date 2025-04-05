import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
// forms module se ng medel milega ng midel hume 2 way data binding ke liye use hoga/ 
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  // class me kuch declare karte hai to usko properties bola jata hai
   firstname:string="Nisha"
   lastname:string="Patil"
   age:number=21
   add:string="Ghatkopar"
   color:string="Violet"
   border:string="2px solid black"
   backgroundcolor:string="blue"

  showAlert()
  {
    alert("Event Binding")
  }

}
