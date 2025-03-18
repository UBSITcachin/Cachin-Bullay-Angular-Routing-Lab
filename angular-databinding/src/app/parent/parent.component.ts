import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  standalone: true,  
  imports: [RouterModule], 
})
export class ParentComponent { }