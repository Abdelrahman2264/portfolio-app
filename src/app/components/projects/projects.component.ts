import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { AppIcons } from '../../shared/icons';
import { Project, ProjectCategory, ProjectFilterOption } from '../../models/project.model';
import { PROJECTS, PROJECT_FILTERS } from '../../data/projects.data';
import { LightboxService } from '../../services/lightbox.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly lightboxService = inject(LightboxService);
  readonly icons = AppIcons;

  readonly activeFilter = signal<ProjectCategory>('all');
  readonly projects = signal<Project[]>(PROJECTS);
  readonly filters = signal<ProjectFilterOption[]>(PROJECT_FILTERS);

  readonly filteredProjects = computed(() => {
    const f = this.activeFilter();
    if (f === 'all') return this.projects();
    return this.projects().filter(p => p.category === f);
  });

  readonly shownCount = computed(() => this.filteredProjects().length);

  setFilter(filter: ProjectCategory): void {
    this.activeFilter.set(filter);
  }

  openPreview(project: Project): void {
    this.lightboxService.open(project.image, `${project.title} â€” ${project.subtitle}`);
  }
}

