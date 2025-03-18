import { NgModule } from '@angular/core'; // If using app-routing.module.ts
import { RouterModule, Routes } from '@angular/router'; // If using app-routing.module.ts
import { ParentComponent } from './parent/parent.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { AdminGuard } from './admin/admin.guard'; // Import AdminGuard

export const routes: Routes = [
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
    component: ParentComponent, // Reuse ParentComponent for admin
    canActivate: [AdminGuard], // Apply AdminGuard
    children: [
      {
        path: 'dashboard',
        component: ChildOneComponent
      },
      {
        path: 'users',
        component: ChildTwoComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/parent',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Or RouterModule.forRoot(routes) in AppModule
  exports: [RouterModule]
})
export class AppRoutingModule {}