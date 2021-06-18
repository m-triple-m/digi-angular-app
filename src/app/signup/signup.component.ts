import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: any = null;

  avatarImage;
  imgURL;
  errorMsg;

  constructor(private fb: FormBuilder, private userservice: UserService) {}

  ngOnInit(): void {
    this.initForm();
    document.body.classList.add('signup');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('signup');
  }

  initForm() {
    this.signupForm = this.fb.group({
      name: '',
      username: '',
      email: '',
      password: '',
      confirm: '',
    });
  }

  submitSignupForm() {
    // alert('form submitted!!');
    let formdata = this.signupForm.value;
    formdata.avatar = this.avatarImage;
    this.userservice.addUser(formdata).subscribe((response) => {
      console.log(response);
    });
  }

  uploadImage(event) {
    let files = event.target.files;
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      Swal.fire('Images Only');
      return;
    }
    this.preview(event.target.files);
    let formData = new FormData();
    this.avatarImage = files[0].name;
    formData.append('image', files[0], files[0].name);
    this.userservice.uploadAvatar(formData).subscribe((response) => {
      console.log(response);
    });
  }

  preview(files) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.errorMsg = 'Only images are supported.';
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }
}
