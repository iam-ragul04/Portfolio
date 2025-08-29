import { Component, OnInit, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';

import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { Skills } from './components/skills/skills';
import { Education } from './components/education/education';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Certifications } from './components/certifications/certifications';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    Footer,
    Home,
    Skills,
    Education,
    Experience,
    Projects,
    Certifications
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize AOS animations
      AOS.init({
        duration: 1000,
        once: true
      });

      // Scroll listener for Back to Top button
      window.addEventListener('scroll', () => {
        const button = document.getElementById('backToTop');
        if (window.scrollY > 300) {
          button?.classList.add('show');
        } else {
          button?.classList.remove('show');
        }
      });

      // Click listener for Back to Top button
      const button = document.getElementById('backToTop');
      button?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }
}
