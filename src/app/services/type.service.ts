import { Injectable } from '@angular/core';
import {Type} from '../data/type';

export const TYPES: Type[] = [
  { name: 'Type 1' },
  { name: 'Type 2' },
  { name: 'Type 3' },
  { name: 'Type 4' }
];

@Injectable()
export class TypeService {
  getTypes(): Type[] {
    return TYPES;
  }
}
