import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  scrolled = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // Check if the window has been scrolled down by 50px or more
    this.scrolled = window.scrollY > 50;
  }
}
