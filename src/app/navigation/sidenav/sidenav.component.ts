import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { authService } from '../../auth/authService.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter<void>();

  isAuth= false;

  constructor(private authService: authService, private router: Router) { }

  ngOnInit() {
    this.authService.stillAuth.subscribe(result => {
      this.isAuth= result;
    });
  }

  closeSidenav() {
    this.sidenavClose.emit();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['../login']);
    this.closeSidenav();
  }

}
