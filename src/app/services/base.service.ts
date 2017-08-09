import { Injectable } from '@angular/core';
import {Base} from '../data/base';

export const BASES: Base[] = [
  { name: 'Base 1' },
  { name: 'Base 2' },
  { name: 'Base 3' },
  { name: 'Base 4' }
];

@Injectable()
export class BaseService {
  getBases(): Base[] {
    return BASES;
  }
}
