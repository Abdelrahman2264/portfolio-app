import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { AppIcons } from '../../shared/icons';
import { FilterOption, SkillFilter, SkillItem, SkillModule } from '../../models/skills.model';
import { FILTER_OPTIONS, SKILL_MODULES } from '../../data/skills.data';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

@Component({
  selector: 'app-skills-console',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, SafeHtmlPipe],
  templateUrl: './skills-console.component.html',
  styleUrl: './skills-console.component.scss'
})
export class SkillsConsoleComponent {
  readonly icons = AppIcons;
  // Signals
  readonly activeFilter = signal<SkillFilter>('all');
  readonly modules = signal<SkillModule[]>(SKILL_MODULES);
  readonly filterOptions = signal<FilterOption[]>(FILTER_OPTIONS);
  readonly selectedSkill = signal<SkillItem>(SKILL_MODULES[0].skills[0]);
  readonly isHoverLocked = signal<boolean>(false);

  // Computed state
  readonly filteredModules = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') return this.modules();
    return this.modules().filter(m => m.filterGroup === filter);
  });

  readonly activeModulesCount = computed(() => this.filteredModules().length);

  readonly totalTechCount = computed(() => {
    return this.filteredModules().reduce((acc, m) => acc + m.skills.length, 0);
  });

  // Level array for 5-segment hardware meters
  readonly meterLevels = [1, 2, 3, 4, 5];

  // Actions
  setFilter(filter: SkillFilter): void {
    this.activeFilter.set(filter);
  }

  selectSkill(skill: SkillItem): void {
    this.selectedSkill.set(skill);
    this.isHoverLocked.set(true);
  }

  onSkillHover(skill: SkillItem): void {
    this.selectedSkill.set(skill);
  }
}

