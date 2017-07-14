import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CharactersComponent } from './characters/characters.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
