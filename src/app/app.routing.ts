import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CharactersComponent } from './characters/characters.component';
import { AdminComponent } from './admin/admin.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterAddComponent } from './character-add/character-add.component';

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
    path: 'characters/:id',
    component: CharacterDetailComponent
  },
  {
    path: 'character-add',
    component: CharacterAddComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
