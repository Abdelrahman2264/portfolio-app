import { Injectable, signal } from '@angular/core';

export interface LightboxState {
  isOpen: boolean;
  imageSrc: string;
  caption: string;
}

@Injectable({
  providedIn: 'root'
})
export class LightboxService {
  readonly state = signal<LightboxState>({
    isOpen: false,
    imageSrc: '',
    caption: ''
  });

  open(imageSrc: string, caption: string): void {
    this.state.set({
      isOpen: true,
      imageSrc,
      caption
    });
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.state.set({
      isOpen: false,
      imageSrc: '',
      caption: ''
    });
    document.body.style.overflow = '';
  }
}
