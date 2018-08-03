import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { authService } from '../authService.service';
import { Router } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService: authService, private router: Router) { }

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.authService.loginUser({
      email: form.value.email,
      password: form.value.password
    });
    this.router.navigate(['../training']);
  }

}
