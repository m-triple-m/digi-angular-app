import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VariablesComponent } from './variables/variables.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbCardModule,
  NbAccordionModule,
  NbButtonModule,
  NbUserModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { ManageUserComponent } from './admin/manage-user/manage-user.component';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    VariablesComponent,
    TwoWayComponent,
    HeaderComponent,
    AdminLayoutComponent,
    ManageUserComponent,
    UpdateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbCardModule,
    NgsRevealModule,
    NbAccordionModule,
    NbButtonModule,
    SweetAlert2Module.forRoot(),
    NbUserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
