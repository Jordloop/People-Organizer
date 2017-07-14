import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { CharacterService } from '../character.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ CharacterService ]
})
export class AdminComponent{

  constructor(private characterService: CharacterService) { }

  submitForm( playerName: string, characterName: string, characterClass: number, level: number, background: string, race: string, alignment: string ) {
  const newCharacter: Character = new Character(playerName, characterName, characterClass, level, background, race, alignment );
  this.characterService.addCharacter(newCharacter);
  alert("Your Character has been saved!")
  }
}
