import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { AppIcons } from '../../shared/icons';
import { TimelineItem } from '../../models/experience.model';
import { TIMELINE_ITEMS } from '../../data/experience.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  readonly icons = AppIcons;
  readonly items = signal<TimelineItem[]>(TIMELINE_ITEMS);
}

