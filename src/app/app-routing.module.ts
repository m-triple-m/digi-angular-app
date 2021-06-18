import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { ManageUserComponent } from './admin/manage-user/manage-user.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VariablesComponent } from './variables/variables.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'variable', component: VariablesComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [LoginGuard],
    children: [
      { path: 'manageuser', component: ManageUserComponent },
      { path: 'updateuser/:id', component: UpdateUserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
