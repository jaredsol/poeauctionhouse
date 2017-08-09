import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {League} from './data/league';
import {LeagueService} from "./services/league.service";
import {Type} from './data/type';
import {Base} from "./data/base";
import {TypeService} from "./services/type.service";
import {BaseService} from "./services/base.service";

@Component({
  selector: 'app-auctionform',
  templateUrl: './auctionform.component.html'
})
export class AuctionFormComponent implements OnInit {
  auctionsearch: FormGroup;
  leagues: League[];
  types: Type[];
  bases: Base[];
  leaguesREST: any;

  constructor(private fb: FormBuilder,
              private leagueService: LeagueService,
              private typeService: TypeService,
              private baseService: BaseService) {
  }

  ngOnInit() {
    this.leagues = this.leagueService.getLeagues();
    this.types = this.typeService.getTypes();
    this.bases = this.baseService.getBases();
    this.leaguesREST = this.leagueService.getLeaguesREST();
    this.auctionsearch = this.getInitialSearchModel();
  }

  onSubmit({value, valid}: { value: FormGroup, valid: boolean }) {
    console.log(value, valid);
    alert(`Data\n ${JSON.stringify(value)} \n\n A search was made! TODO`);
  }

  resetForm() {
    this.auctionsearch = this.getInitialSearchModel();
  }

  getInitialSearchModel(): FormGroup {
    return this.fb.group({
      league: ['League 1'],
      type: ['Type 1'],
      base: ['Base 1'],
      itemName: [''],
      offense: this.fb.group({
        damage: this.fb.group({
          min: [''],
          max: ['']
        }),
        dps: this.fb.group({
          min: [''],
          max: ['']
        }),
        pdps: this.fb.group({
          min: [''],
          max: ['']
        }),
        edps: this.fb.group({
          min: [''],
          max: ['']
        }),
        aps: this.fb.group({
          min: [''],
          max: ['']
        }),
        crit: this.fb.group({
          min: [''],
          max: ['']
        }),
      }),
      defense: this.fb.group({
        armor: this.fb.group({
          min: [''],
          max: ['']
        }),
        evasion: this.fb.group({
          min: [''],
          max: ['']
        }),
        shield: this.fb.group({
          min: [''],
          max: ['']
        }),
        block: this.fb.group({
          min: [''],
          max: ['']
        })
      })
    });
  }
}
