import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component'; // If AdminComponent exists
import { ParentComponent } from '../parent/parent.component';
import { ChildOneComponent } from '../child-one/child-one.component';
import { ChildTwoComponent } from '../child-two/child-two.component';

@NgModule({
  declarations: [
    AdminComponent, // Declare AdminComponent
    
  ],
  imports: [
    CommonModule,
    ParentComponent,
    ChildOneComponent,
    ChildTwoComponent
  ]
})
export class AdminModule {}