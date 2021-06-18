import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginform: any;
  constructor(private userservice: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginform = this.fb.group({
      email: '',
      password: '',
    });
  }

  loginSubmit() {
    console.log(this.loginform.value);
    let formdata = this.loginform.value;

    this.userservice.getUserByEmail(formdata.email).subscribe((userdata) => {
      if (userdata) {
        if (userdata['password'] == formdata['password']) {
          Swal.fire({
            icon: 'success',
            title: 'Welcome!!',
            text: 'Your have successfully logged in',
          });

          sessionStorage.setItem('user', JSON.stringify(userdata));
          this.userservice.currentUser = userdata;
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops!!',
            text: 'Your email and password dont match',
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops!!',
          text: 'Your email and password dont match',
        });
      }
    });
  }
}
