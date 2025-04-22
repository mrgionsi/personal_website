import { Component, OnDestroy, signal, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';  // Import this

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnDestroy {
  /** Full list of greetings – add more any time */
  private greetings = [
    'Hello',      // English
    'Ciao',       // Italian
    'Hola',       // Spanish
    'Bonjour', // French
    'Hallo',       // German
    'Olá',        // Portuguese

  ];

  /** reactive signal holding the current greeting */
  greeting = signal(this.greetings[0]);

  /** interval timer id */
  private timer: any;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    // Check if running in the browser before setting the interval
    if (isPlatformBrowser(this.platformId)) {
      this.timer = setInterval(() => {
        // pick a random delay between 2000‑3000 ms next time
        const delay = 2000;

        // rotate to the next greeting (wrap‑around)
        const idx =
          (this.greetings.indexOf(this.greeting()) + 1) % this.greetings.length;
        this.greeting.set(this.greetings[idx]);

        // reschedule
        this.timer = setInterval(() => { }, delay); // dummy, reset below
      }, 2500); // initial 2.5 s
    }
  }

  ngOnDestroy() {
    // Clear the interval only if the timer is set
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
