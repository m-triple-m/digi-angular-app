import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  userform;
  constructor(
    private fb: FormBuilder,
    private activated: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    let id = this.activated.snapshot.paramMap.get('id');

    this.userService.getUserById(id).subscribe((res) => {
      this.initForm(res);
    });
  }

  initForm(data) {
    this.userform = this.fb.group(data);
  }

  updateUser() {
    let formdata = this.userform.value;

    this.userService.updateUser(formdata._id, formdata).subscribe((res) => {
      console.log(res);
    });
  }
}
