
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router) {}

  navigateToBlog() {
    this.router.navigate(['/blog']);
  }

  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  activeElementId: string = 'home';
  isButtonActive: { [key: string]: boolean } = {};

  scrollToElement(id: string): void {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    this.activeElementId = id;
  }

  handleSectionClick(sectionId: string) {
    this.scrollToElement(sectionId);
    this.activeElementId = sectionId;

    // Update isButtonActive object
    this.isButtonActive = Object.assign(
      {},
      ...Object.entries(this.isButtonActive).map(([key, value]) => ({
        [key]: key === sectionId,
      }))
    );
  }
}

