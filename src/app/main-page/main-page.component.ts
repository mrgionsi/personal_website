import { Component, OnDestroy, signal, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';  // Import this

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule],
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
  selectedSection = signal<string | null>(null);

  openSection(section: string) {
    this.selectedSection.set(section);
  }

  jobs = [
    {
      title: 'Solution Architect',
      company: 'Ericsson',
      period: 'Jan 2022 – Present',
      description: 'Working on Angular + Tailwind to build modern UIs.',
    },
    {
      title: 'Integration Engineer',
      company: 'Ericsson',
      period: 'Jan 2022 – Present',
      description: 'Working on Angular + Tailwind to build modern UIs.',
    },
    {
      title: 'Web Developer',
      company: '3EM',
      period: 'Jun 2021 – Dec 2021',
      description: 'Built landing pages and dashboard components.',
    },
  ];
  education = [
    {
      degree: 'MSc in Computer Science',
      institution: 'University of Naples Federico II',
      period: '2019 – 2021',
      description: 'Specialized in AI, data science, and modern web technologies.',
    },
    {
      degree: 'BSc in Software Engineering',
      institution: 'Politecnico di Milano',
      period: '2016 – 2019',
      description: 'Focused on algorithms, databases, and systems design.',
    }
  ];
  projects = [
    {
      name: 'Smart B&B Dashboard',
      description: 'A real-time dashboard for managing guests, bookings, and identity verification.',
      stack: ['Angular', 'Flask', 'PostgreSQL'],
      image: 'assets/projects/bnb.jpg',
      github: 'https://github.com/yourname/bnb-dashboard',
      demo: 'https://bnb-dashboard.example.com'
    },
    {
      name: 'AI Translator',
      description: 'Multilingual translator powered by transformers and OpenAI API.',
      stack: ['Python', 'FastAPI', 'Tailwind'],
      image: 'assets/projects/translator.jpg',
      github: 'https://github.com/yourname/ai-translator',
    },
    // more...
  ];

}
