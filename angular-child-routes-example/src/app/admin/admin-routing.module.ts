import { NgModule } from '@angular/core'; // If using app-routing.module.ts

import { RouterModule, Routes } from '@angular/router'; // If using app-


import { ParentComponent } from '../parent/parent.component'; // Example

import { ChildOneComponent } from '../child-one/child-one.component'; 
import { ChildTwoComponent } from '../child-two/child-two.component';

import { AdminGuard } from './admin.guard'; // Import AdminGuard
const routes: Routes = [
{

path: 'parent',
component: ParentComponent,
children: [
{
path: 'child-one',
component: ChildOneComponent
},
{
path: 'child-two',
component: ChildTwoComponent
}
]
},
{
path: 'admin',
component: ParentComponent, // Let's reuse ParentComponent for admin section

canActivate: [AdminGuard], // Apply AdminGuard to this route
children: [
{
path: 'dashboard',
component: ChildOneComponent // Example admin child component
},
{
path: 'users',
component: ChildTwoComponent // Example admin child component
}
]
},
{
path: '',
redirectTo: '/parent',
pathMatch: 'full'
}
];
// NgModule and exports remain if using app-routing.module.ts
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }