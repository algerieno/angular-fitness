import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { authService } from '../authService.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  maxDate;
  minDate;

  constructor(private authService: authService, private router: Router) { }

  ngOnInit() {
    this.setDates();
  }

  onSubmit(form: NgForm) {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
    this.router.navigate(['../training']);
  }

  setDates() {
    this.maxDate= new Date();
    this.minDate= new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.minDate.setFullYear(this.minDate.getFullYear() - 45);
  }

}
