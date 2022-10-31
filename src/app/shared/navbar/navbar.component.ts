import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  usuario: any = {}

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('login') || '{}');
  }

  logout(){
    localStorage.removeItem('login');
    this.usuario = undefined;
    this.router.navigate(['/login']);
  }
}
