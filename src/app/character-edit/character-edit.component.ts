import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-edit',
  templateUrl: './character-edit.component.html',
  styleUrls: ['./character-edit.component.css'],
  providers: [ CharacterService ]
})
export class CharacterEditComponent{

  @Input() selectedCharacter;

  constructor(private characterService: CharacterService) { }

beginEditCharacter(characterToEdit) {
  console.log(characterToEdit);
  this.characterService.editCharacter(characterToEdit);
}

}
