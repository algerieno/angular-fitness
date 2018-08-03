import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { authService } from '../../auth/authService.service';
import { Router } from '../../../../node_modules/@angular/router';
import { rootRoute } from '../../../../node_modules/@angular/router/src/router_module';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();

  isAuth= false;

  constructor(private authService: authService, private router: Router) { }
  
  ngOnInit() {
    this.authService.stillAuth.subscribe(result => {
      this.isAuth= result;
    });
  }

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['../login']);
  }
}
