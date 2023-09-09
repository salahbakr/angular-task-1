import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  navPadding(navbar:HTMLElement){
    window.scrollY >= 30 ? navbar.classList.remove('py-4') : navbar.classList.add('py-4');
  }
}
