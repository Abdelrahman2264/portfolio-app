import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { AppIcons } from '../../shared/icons';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  readonly themeService = inject(ThemeService);
  readonly icons = AppIcons;

  readonly isScrolled = signal<boolean>(false);
  readonly isMobileMenuOpen = signal<boolean>(false);
  readonly activeSection = signal<string>('home');

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (typeof window === 'undefined') return;

    this.isScrolled.set(window.scrollY > 10);

    // Active tab navigation tracking
    const scrollPos = window.scrollY + 140;
    const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];

    for (let i = sections.length - 1; i >= 0; i--) {
      const id = sections[i];
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) {
        this.activeSection.set(id);
        break;
      }
    }
  }

  scrollToSection(id: string, event: Event): void {
    event.preventDefault();
    this.closeMobileMenu();
    this.activeSection.set(id);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
