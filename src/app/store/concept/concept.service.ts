import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Concept } from './concept.model';

@Injectable({ providedIn: 'root' })
export class ConceptService {
  getAll(): Observable<Concept[]> {
    return of([
      {
        _id: 'a4dg6x1',
        name: 'Work station',
        positions: [
          { name: '1', enabled: true },
          { name: '2', enabled: false },
          { name: '3', enabled: true },
          { name: '4', enabled: false },
          { name: '5', enabled: true },
          { name: '6', enabled: true },
          { name: '7', enabled: true },
        ],
        enabled: true,
      },
      {
        _id: 'n21f256',
        name: 'Parking',
        positions: [
          { name: 'A', enabled: true },
          { name: 'B', enabled: false },
          { name: 'C', enabled: true },
          { name: 'D', enabled: true },
        ],
        enabled: true,
      },
    ]).pipe(delay(2000));
  }
}
