import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
  providers: [ CharacterService ]
})

export class CharacterDetailComponent implements OnInit {
  characterId: string;
  characterToDisplay;
  selectEdit: boolean = null;
  characterInfo: boolean = true;

  constructor(private route: ActivatedRoute, private location: Location, private characterService: CharacterService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.characterId = urlParameters['id'];
    });
    this.characterToDisplay = this.characterService.getCharacterById(this.characterId);
  }

  editClicked() {
    if(this.selectEdit === null) {
      this.selectEdit = true;
      // this.characterInfo = null;
    }
    else {
     this.selectEdit = null;
    //  this.characterInfo = true;
    }
  }

}
