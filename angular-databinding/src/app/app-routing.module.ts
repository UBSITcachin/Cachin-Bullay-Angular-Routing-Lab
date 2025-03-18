
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { AdminGuard } from './admin/admin.guard'; // Import your AdminGuard


const routes: Routes = [
  { path: 'parent', component: ParentComponent, children: [
      { path: 'child-one', component: ChildOneComponent },
      { path: 'child-two', component: ChildTwoComponent }
    ] 
  },
  { path: 'admin', component: ParentComponent, canActivate: [AdminGuard], children: [
      { path: 'dashboard', component: ChildOneComponent },
      { path: 'users', component: ChildTwoComponent }
    ] 
  },
  { path: '', redirectTo: '/parent', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }