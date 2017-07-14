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

  submitForm( playerName: string, characterName: string, characterClass: number, level: number, background: string, race: string, alignment: string ) {
  const newCharacter: Character = new Character(playerName, characterName, characterClass, level, background, race, alignment );
  console.log(newCharacter);
  }
}


  // constructor( public playerName, string, public characterName: string, public characterClass: number, public level: number, public background: string, public race: string, public alignment: string ) {}
