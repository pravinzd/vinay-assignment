import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f', { static: false }) userForm: NgForm;
  title = 'My Assignment';
  ID: number;
  username: '';
  email: '';
  phone: '';
  submitted = false;
  user = {
    username: '',
    email: '',
    phone: '',
  };
  ngOnInit() {
  }


  onSubmit(form: NgForm) {
    console.log(form);
    this.submitted = true;
    this.user.username = this.userForm.value.username;
    this.user.email = this.userForm.value.email;
    this.user.phone = this.userForm.value.phone;

    const client = JSON.stringify({ Name: this.user.username, Email: this.user.email, Phone: this.user.phone });

    localStorage.setItem('added-items', JSON.stringify(client));

  }
}
