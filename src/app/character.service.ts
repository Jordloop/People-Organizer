import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class CharacterService {
  characters: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.characters = database.list('characters')
  }

  getCharacters() {
    return this.characters;
  }

  getCharacterById(characterId: string) {
    return this.database.object('characters/' + characterId);
  }

  addCharacter(newCharacter: Character) {
    this.characters.push(newCharacter);
  }

  editCharacter(localEditedCharacter) {
    console.log("editCharacter");
    const characterEntryInFirebase = this.getCharacterById(localEditedCharacter.$key);
    characterEntryInFirebase.update({ playerName: localEditedCharacter.playerName,
                                      characterName: localEditedCharacter.characterName,
                                      characterClass: localEditedCharacter.characterClass,
                                      level: localEditedCharacter.level,
                                      characterBackground: localEditedCharacter.background,
                                      race: localEditedCharacter.race,
                                      alignment: localEditedCharacter.alignment
                                    });
    console.log("Updated!")
  }
}
