import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { AppIcons } from '../../shared/icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  readonly icons = AppIcons;
  readonly ghStats = signal<string>('Active Enterprise Developer');

  ngOnInit(): void {
    this.fetchGitHubStats();
  }

  private fetchGitHubStats(): void {
    if (typeof fetch !== 'undefined') {
      fetch('https://api.github.com/users/Abdelrahman2264')
        .then(res => {
          if (!res.ok) throw new Error('GitHub status ' + res.status);
          return res.json();
        })
        .then(data => {
          const repos = data.public_repos ?? '—';
          const followers = data.followers ?? '—';
          this.ghStats.set(`${repos} repos • ${followers} followers`);
        })
        .catch(() => {
          this.ghStats.set('Active Enterprise Developer');
        });
    }
  }
}
