import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { Skills } from './components/skills/skills';
import { Education } from './components/education/education';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Certifications } from './components/certifications/certifications';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'skills', component: Skills },
  { path: 'education', component: Education },
  { path: 'experience', component: Experience },
  { path: 'projects', component: Projects },
  { path: 'certifications', component: Certifications }
];
