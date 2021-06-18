import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css'],
})
export class ManageUserComponent implements OnInit {
  usersList: any;
  loading = true;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getAllUsers().subscribe((data) => {
      this.usersList = data;
      this.loading = false;
    });
  }

  deleteUser(id) {
    this.userService.deleteUser(id).subscribe((res) => {
      console.log('user deleted');
      this.fetchUsers();
    });
  }

  updateUser(id) {
    this.router.navigate(['/admin/updateuser', id]);
  }
}
