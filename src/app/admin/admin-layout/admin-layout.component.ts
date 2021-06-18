import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { app_config } from 'src/config';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
})
export class AdminLayoutComponent implements OnInit {
  url = app_config.api_url + '/';

  constructor(public userservice: UserService) {}

  ngOnInit(): void {}
}
