import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { app_config } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isloggedin = false;
  currentUser: any;
  url = app_config.api_url + '/user';
  constructor(private http: HttpClient) {
    let user = sessionStorage.getItem('user');

    if (user) {
      this.currentUser = JSON.parse(user);
      this.isloggedin = true;
    }
  }

  addUser(formdata): Observable<any> {
    console.log('request sent from service');
    return this.http.post(this.url + '/add', formdata);
  }

  getAllUsers() {
    return this.http.get(this.url + '/getall');
  }

  deleteUser(id: any) {
    return this.http.delete(this.url + '/delete/' + id);
  }

  updateUser(id: any, data) {
    return this.http.put(this.url + '/update/' + id, data);
  }

  getUserById(id) {
    return this.http.get(this.url + '/getbyid/' + id);
  }

  getUserByEmail(email) {
    return this.http.get(this.url + '/getbyemail/' + email);
  }

  uploadAvatar(file: any) {
    return this.http.post(app_config.api_url + '/util/addimg', file);
  }
}
