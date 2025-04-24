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
  loading = true;

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
  getBackgroundStyles(project: any) {
    const backgroundSizeMap: { [key: string]: any } = {
      'Remote Check-in': 'cover',
      'B&B Chapeau': '60% 100%',
      'GESTA - IT Gestionale Magazzino': '55% 80%'
    };

    const backgroundSize = backgroundSizeMap[project.name] || '100% 100%';

    return {
      'background-image': `url(${project.image})`,
      'background-size': backgroundSize,
      'background-position': 'center',
      'background-repeat': 'no-repeat'
    };
  }


  jobs = [
    {
      title: 'Solution Architect',
      company: 'Ericsson',
      period: 'Jan 2022 – Present',
      description: `Solution Architect for Provisioning and Activation Systems for Europe wide Customer, from design to implementation for 4G/VoLTE and 5G networks.
      Technical Coordinator for various activities, adopting a mixed Agile Methodology.\n
      Working on Cloud Native Function based on K8S and with Containers as well as Orchestration Network Function on MANO standard.
      Focusing on automation processes from python script to Web Application (Angular, Python) for testing phase and QoS.\n
      DevOps approach for continuos integration and delivery.\n
      "Automate what can be automated, so you can focuse on what matters." 
      `,
    },
    {
      title: 'Integration Engineer',
      company: 'Ericsson',
      period: 'Oct 2018 – Jan 2022',
      description: `Engineer for dynamic activation system, provisioning and sim activation for O2 UK Customer.
       Experience on service provisioning ( 2G, 3G, 4G and VoLTE ). 
       QoS for customer solution, assurance of working system. System integration, based on the requirement.
       Use of Agile Methodology in a non-development project. 
       Design, test verification and test management are reported on Jira/Confluence. 
       Use of XRay plugin on Jira for manual testing. Owner of testing automation software. (See Work section).`,
    },
    {
      title: 'Full Stack Developer',
      company: '3EM',
      period: 'Sept 2017 – Oct 2018',
      description: `      Development of Monitoring system using .NET Framework and pure web technologies (HTML, CSS, JS).\n
      Internship for web development - HTML, CSS, Javascript.`,
    },
  ];
  education = [
    {
      degree: 'Bachelor Degree in Computer Science',
      institution: 'University of Salerno/Pegaso',
      period: '2016 – 2021',
      description: 'Bachelor degree in computer science.',
    },
    {
      degree: 'Erasmus in Brussels, Belgium',
      institution: 'Erasmus Plus',
      period: 'May 2016 – Aug 2016',
      description: 'Erasmus focused on Web technologies.',
    }
  ];
  projects = [
    {
      name: 'Remote Check-in',
      description: 'Platorm to handle reservatin for Bed and Breakfast remotly and validate identity documentation',
      stack: ['Angular', 'Angular Material', 'Python', 'FastAPI',
        'PostgreSQL', 'Docker', 'Code Rabbit AI - Code Review', 'Sonarqube - Code Review', 'DevOps'],
      image: 'assets/images/remote-checkin.png',
      github: 'https://github.com/mrgionsi/remote-checkin',
      demo: 'https://gestionale-magazzino.gionsihome.duckdns.org'
    },
    {
      name: 'U-Work',
      description: 'Platform to connect learners and professionists and share knowledge to glow up your carreer',
      stack: ['Angular', 'Flask', 'PostgreSQL', 'Jitsi Meet Self Hostes and customized', 'Keycloak Integration for Authentication', 'Docker', 'PaaS'],
      image: 'https://u-work.it/assets/images/logo-u-work-bianco.png',
      github: '',
      demo: 'https://u-work.it/aboutus'
    },
    {
      name: 'GESTA - IT Gestionale Magazzino',
      description: `Manage cafe' shops and related sales and stocks.\n 
      Access with Username = admin; Password = Admin123.`,
      stack: ['Angular', 'Angular Material', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'CI/CD'],
      image: 'assets/images/gesta.png',
      demo: 'https://gestionale-magazzino.gionsihome.duckdns.org'
    },
    {
      name: `This website 😊`,
      description: 'Static website as minimalist portfolio and personal blog for tech arguments, books and podcasts review.',
      stack: ['Angular', 'Tailwind'],
      image: 'assets/images/logo-v2.png',
      demo: 'https://giovannipasquariello.dev'
    },
    {
      name: 'B&B Chapeau',
      description: 'Static website as for Bed and Breakfast Chapeau, in Casagiove (CE).',
      stack: ['Angular', 'PrimeNG'],
      image: 'https://bbchapeau.it/logo.png',
      demo: 'https://bbchapeau.it'
    },
    // more...
  ];

  handleAnchorClick(event: MouseEvent, targetId: string): void {
    event.preventDefault();  // Prevent default anchor click behavior

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Wait for the target element to be fully rendered and accessible
      setTimeout(() => {
        const navbarHeight = document.querySelector('nav')?.clientHeight || 0; // Get navbar height
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY; // Get the top position relative to the document

        // Calculate scroll position considering navbar height
        const scrollPosition = targetPosition - navbarHeight - 55;

        // Smooth scroll to the target
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth',
        });
      }, 0); // Using a timeout to ensure DOM is fully rendered
    }
  }

}
