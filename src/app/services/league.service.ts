import { Injectable } from '@angular/core';
import {League} from '../data/league';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

export const LEAGUES: League[] = [
  { id: 11, name: 'League 1' },
  { id: 12, name: 'League 2' },
  { id: 13, name: 'League 3' },
  { id: 14, name: 'League 4' }
];

@Injectable()
export class LeagueService {

  constructor(private http: Http) {}

  getLeagues(): League[] {
    return LEAGUES;
  }

  getLeaguesREST() {
    return this.http.get('http://api.pathofexile.com/leagues?type=main&compact=1').map(res => res.json());
  }
}
