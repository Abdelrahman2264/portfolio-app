import { Component, OnInit, OnDestroy, ElementRef, ViewChild, signal, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { AppIcons } from '../../shared/icons';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  @ViewChild('editorContainer') editorContainer?: ElementRef<HTMLDivElement>;
  @ViewChild('codeGutter') codeGutter?: ElementRef<HTMLDivElement>;
  @ViewChild('codeArea') codeArea?: ElementRef<HTMLDivElement>;
  @ViewChild('probBody') probBody?: ElementRef<HTMLDivElement>;

  readonly icons = AppIcons;

  // Simulator state signals
  readonly activeTab = signal<'dev' | 'prog'>('dev');
  readonly activePanel = signal<'problems' | 'terminal'>('problems');
  readonly buildStatus = signal<string>('✓ Ready');
  readonly statusBranch = signal<string>('main*');
  readonly lnCol = signal<string>('Ln 1, Col 1');

  // Metrics count-up signals
  readonly systemsCount = signal<number>(0);
  readonly techCount = signal<string>('0');

  private animTimer: any = null;
  private countUpTimer: any = null;
  private isDestroyed = false;
  private cursorEl: HTMLSpanElement | null = null;
  private linesCount = 0;
  private resumeTimeout: any = null;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.runCountUp();
  }

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.startCycleTimeout = setTimeout(() => {
        if (!this.isDestroyed) {
          this.runCycle();
        }
      }, 400);
    });
  }

  ngOnDestroy(): void {
    this.isDestroyed = true;
    if (this.animTimer) clearTimeout(this.animTimer);
    if (this.countUpTimer) clearInterval(this.countUpTimer);
    if (this.startCycleTimeout) clearTimeout(this.startCycleTimeout);
    if (this.resumeTimeout) clearTimeout(this.resumeTimeout);
  }

  private startCycleTimeout: any = null;

  /* --- Count Up Animation --- */
  private runCountUp(): void {
    let curSys = 0;
    let curTech = 0;
    const targetSys = 6;
    const targetTech = 25;

    this.countUpTimer = setInterval(() => {
      if (this.isDestroyed) return;
      let changed = false;

      if (curSys < targetSys) {
        curSys++;
        this.systemsCount.set(curSys);
        changed = true;
      }

      if (curTech < targetTech) {
        curTech += 2;
        if (curTech >= targetTech) {
          this.techCount.set('25+');
        } else {
          this.techCount.set(String(curTech));
        }
        changed = true;
      }

      if (!changed) {
        clearInterval(this.countUpTimer);
      }
    }, 45);
  }

  /* --- Token syntax highlighter helpers --- */
  private readonly T = {
    kw: (t: string) => `<span class="tk-kw">${t}</span>`,
    cl: (t: string) => `<span class="tk-cls">${t}</span>`,
    fn: (t: string) => `<span class="tk-fn">${t}</span>`,
    vr: (t: string) => `<span class="tk-var">${t}</span>`,
    st: (t: string) => `<span class="tk-str">${t}</span>`,
    cm: (t: string) => `<span class="tk-cmt">${t}</span>`
  };

  private get DEV_LINES(): string[] {
    const { cm, kw, cl, vr, st } = this.T;
    return [
      cm('// DeveloperProfile.cs — Enterprise.Core'),
      `${kw('namespace')} ${cl('Enterprise')}.${cl('Core')};`,
      '',
      `${kw('public sealed record')} ${cl('DeveloperProfile')}`,
      '{',
      `    ${kw('public string')} ${vr('Name')}   => ${st('"Abdelrahman Khalaf"')};`,
      `    ${kw('public string')} ${vr('Role')}   => ${st('"Full-Stack .NET Engineer"')};`,
      `    ${kw('public string')} ${vr('Email')}  => ${st('"abdokhalaf334@gmail.com"')};`,
      `    ${kw('public string')} ${vr('GitHub')} => ${st('"github.com/Abdelrahman2264"')};`,
      `    ${kw('public string')} ${vr('Status')} => ${st('"Production Ready · Online"')};`,
      '}'
    ];
  }

  private get PROG_LINES(): string[] {
    const { cm, kw, cl, fn, st } = this.T;
    return [
      cm('// Program.cs — Enterprise Runtime Entrypoint'),
      `${kw('using')} ${cl('Enterprise')}.${cl('Core')};`,
      '',
      `${kw('var')} builder = ${cl('WebApplication')}.${fn('CreateBuilder')}(args);`,
      `${kw('var')} app = builder.${fn('Build')}();`,
      '',
      `${kw('var')} dev = ${kw('new')} ${cl('DeveloperProfile')}();`,
      `app.${fn('MapGet')}(${st('"/"')}, () => ${cl('Results')}.${fn('Ok')}(dev));`,
      '',
      `app.${fn('Run')}(${st('"https://localhost:5001"')});`
    ];
  }

  private clearEditor(): void {
    if (this.animTimer) {
      clearTimeout(this.animTimer);
      this.animTimer = null;
    }
    this.removeCursor();
    this.linesCount = 0;

    const gutter = this.codeGutter?.nativeElement;
    const codeArea = this.codeArea?.nativeElement;
    const editor = this.editorContainer?.nativeElement;

    if (gutter) gutter.innerHTML = '';
    if (codeArea) codeArea.innerHTML = '';
    if (editor) editor.scrollTop = 0;
  }

  private autoScroll(): void {
    const editor = this.editorContainer?.nativeElement;
    if (editor) {
      editor.scrollTop = editor.scrollHeight;
    }
  }

  private addLine(htmlContent?: string): HTMLDivElement {
    this.linesCount++;
    const ln = this.linesCount;

    const gutter = this.codeGutter?.nativeElement;
    if (gutter) {
      const gDiv = document.createElement('div');
      gDiv.textContent = String(ln);
      gutter.appendChild(gDiv);
    }

    const codeArea = this.codeArea?.nativeElement;
    const cDiv = document.createElement('div');
    cDiv.className = 'vsc-line';
    cDiv.innerHTML = htmlContent || '';
    if (codeArea) {
      codeArea.appendChild(cDiv);
    }

    this.ngZone.run(() => {
      this.lnCol.set(`Ln ${ln}, Col 1`);
    });

    this.autoScroll();
    return cDiv;
  }

  private showCursor(parentEl: HTMLElement): void {
    this.removeCursor();
    this.cursorEl = document.createElement('span');
    this.cursorEl.className = 'code-cursor';
    parentEl.appendChild(this.cursorEl);
  }

  private removeCursor(): void {
    if (this.cursorEl && this.cursorEl.parentNode) {
      this.cursorEl.parentNode.removeChild(this.cursorEl);
    }
    this.cursorEl = null;
  }

  private typeText(el: HTMLElement, html: string, plain: string, speed: number, done: () => void): void {
    let i = 0;
    const len = plain.length;
    el.innerHTML = '';
    this.showCursor(el);

    const step = () => {
      if (this.isDestroyed) return;
      if (i >= len) {
        this.removeCursor();
        el.innerHTML = html;
        this.autoScroll();
        done();
        return;
      }
      el.textContent = plain.slice(0, i + 1);
      if (this.cursorEl) el.appendChild(this.cursorEl);
      i++;
      this.autoScroll();
      this.animTimer = setTimeout(step, speed + Math.random() * 10 - 5);
    };

    step();
  }

  /* --- Main Simulation Cycle --- */
  private runCycle(): void {
    if (this.isDestroyed) return;

    this.clearEditor();

    this.ngZone.run(() => {
      this.activeTab.set('dev');
      this.activePanel.set('problems');
      this.buildStatus.set('✓ Ready');
    });

    const probBody = this.probBody?.nativeElement;
    if (probBody) {
      probBody.innerHTML = '<span style="color:#484f58;font-size:.67rem;">No problems detected. Solution 0 errors.</span>';
    }

    const devLines = this.DEV_LINES;
    let devLineIdx = 0;

    const typeDevNext = () => {
      if (this.isDestroyed) return;

      if (devLineIdx >= devLines.length) {
        this.ngZone.run(() => {
          this.buildStatus.set('✓ Saved DeveloperProfile.cs');
        });

        this.animTimer = setTimeout(() => {
          this.switchToProgramAndRun();
        }, 800);
        return;
      }

      const html = devLines[devLineIdx];
      const plain = html.replace(/<[^>]+>/g, '');

      if (!plain.trim()) {
        this.addLine('');
        devLineIdx++;
        this.animTimer = setTimeout(typeDevNext, 40);
        return;
      }

      const el = this.addLine('');
      this.typeText(el, html, plain, 18, () => {
        devLineIdx++;
        this.animTimer = setTimeout(typeDevNext, 45);
      });
    };

    typeDevNext();
  }

  private switchToProgramAndRun(): void {
    if (this.isDestroyed) return;

    this.ngZone.run(() => {
      this.activeTab.set('prog');
      this.buildStatus.set('⚙ dotnet run');
      this.activePanel.set('terminal');
    });

    this.clearEditor();

    const progLines = this.PROG_LINES;
    progLines.forEach(l => {
      this.addLine(l);
    });

    const editor = this.editorContainer?.nativeElement;
    if (editor) editor.scrollTop = 0;

    this.renderTerminalOutput();

    this.ngZone.run(() => {
      this.buildStatus.set('✓ 0 errors, 0 warnings');
    });

    // Pause 7 seconds to review executive output, then smoothly loop
    this.animTimer = setTimeout(() => {
      this.runCycle();
    }, 7500);
  }

  private renderTerminalOutput(): void {
    const probBody = this.probBody?.nativeElement;
    if (probBody) {
      probBody.innerHTML = `
        <div class="terminal-text">
          <div style="color:#79c0ff;margin-bottom:2px;">$ dotnet run --configuration Release</div>
          <div style="color:#8b949e;margin-bottom:2px;">Building Enterprise.Core [net10.0]... Done (0.18s)</div>
          <div style="color:#38bdf8;">info: Microsoft.Hosting.Lifetime[14]</div>
          <div style="color:#8b949e;padding-left:10px;margin-bottom:4px;">Now listening on: <span style="color:#7ee787;">https://localhost:5001</span></div>
          <div style="color:#3fb950;font-weight:600;margin-bottom:3px;">[HTTP GET /] 200 OK &middot; application/json:</div>
          <div style="color:#e6edf3;background:rgba(255,255,255,0.03);padding:6px 10px;border-radius:4px;border:1px solid #21262d;font-size:0.62rem;line-height:1.4;">
            <div>{</div>
            <div style="padding-left:10px;"><span style="color:#79c0ff;">"name"</span>: <span style="color:#a5d6ff;">"Abdelrahman Khalaf"</span>,</div>
            <div style="padding-left:10px;"><span style="color:#79c0ff;">"role"</span>: <span style="color:#a5d6ff;">"Full-Stack .NET Engineer"</span>,</div>
            <div style="padding-left:10px;"><span style="color:#79c0ff;">"email"</span>: <span style="color:#a5d6ff;">"abdokhalaf334@gmail.com"</span>,</div>
            <div style="padding-left:10px;"><span style="color:#79c0ff;">"github"</span>: <span style="color:#a5d6ff;">"github.com/Abdelrahman2264"</span>,</div>
            <div style="padding-left:10px;"><span style="color:#79c0ff;">"status"</span>: <span style="color:#7ee787;">"Production Ready · Online"</span></div>
            <div>}</div>
          </div>
        </div>
      `;
      probBody.scrollTop = 0;
    }
  }

  private renderFullDevProfile(): void {
    this.clearEditor();
    const devLines = this.DEV_LINES;
    devLines.forEach(l => {
      this.addLine(l);
    });
    const editor = this.editorContainer?.nativeElement;
    if (editor) editor.scrollTop = 0;
  }

  private renderFullProgramCs(): void {
    this.clearEditor();
    const progLines = this.PROG_LINES;
    progLines.forEach(l => {
      this.addLine(l);
    });
    const editor = this.editorContainer?.nativeElement;
    if (editor) editor.scrollTop = 0;
  }

  /* --- Interactive Tab Navigation --- */
  onTabClick(tab: 'dev' | 'prog'): void {
    if (this.animTimer) {
      clearTimeout(this.animTimer);
      this.animTimer = null;
    }
    if (this.resumeTimeout) {
      clearTimeout(this.resumeTimeout);
      this.resumeTimeout = null;
    }

    if (tab === 'dev') {
      this.activeTab.set('dev');
      this.renderFullDevProfile();
      this.activePanel.set('problems');
      this.buildStatus.set('✓ Saved DeveloperProfile.cs');
      const probBody = this.probBody?.nativeElement;
      if (probBody) {
        probBody.innerHTML = '<span style="color:#484f58;font-size:.67rem;">No problems detected. Solution 0 errors.</span>';
      }
    } else {
      this.activeTab.set('prog');
      this.renderFullProgramCs();
      this.activePanel.set('terminal');
      this.renderTerminalOutput();
      this.buildStatus.set('✓ 0 errors, 0 warnings');
    }

    // Resume auto cycle after 8 seconds of inactivity
    this.resumeTimeout = setTimeout(() => {
      if (!this.isDestroyed) {
        this.runCycle();
      }
    }, 8000);
  }

  onPanelClick(panel: 'problems' | 'terminal'): void {
    this.activePanel.set(panel);
    if (panel === 'terminal') {
      this.renderTerminalOutput();
    } else {
      const probBody = this.probBody?.nativeElement;
      if (probBody) {
        probBody.innerHTML = '<span style="color:#484f58;font-size:.67rem;">No problems detected. Solution 0 errors.</span>';
      }
    }
  }
}
