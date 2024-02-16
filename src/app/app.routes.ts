import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'content', component: ContentComponent},
  {path: 'about', component: AboutComponent}
];
