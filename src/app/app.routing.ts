import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CharactersComponent } from './characters/characters.component';
import { AdminComponent } from './admin/admin.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'characters/:id',
    component: CharacterDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
