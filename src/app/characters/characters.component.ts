import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers: [CharacterService]
})
export class CharactersComponent implements OnInit {
  characters: FirebaseListObservable<any[]>;

  constructor(private router: Router, private characterService: CharacterService) { }

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
    console.log(this.characters);
  }

}
