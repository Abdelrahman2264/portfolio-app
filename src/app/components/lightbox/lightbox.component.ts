import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { AppIcons } from '../../shared/icons';
import { LightboxService } from '../../services/lightbox.service';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.scss'
})
export class LightboxComponent {
  readonly lightboxService = inject(LightboxService);
  readonly icons = AppIcons;

  @HostListener('document:keydown.escape')
  onEscapePress(): void {
    if (this.lightboxService.state().isOpen) {
      this.lightboxService.close();
    }
  }

  onBackdropClick(event: MouseEvent): void {
    this.lightboxService.close();
  }

  onContentClick(event: MouseEvent): void {
    event.stopPropagation();
  }
}

