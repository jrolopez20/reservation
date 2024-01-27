import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Reservation } from './reservation.model';

@Injectable({providedIn: 'root'})
export class ReservationService {
  getAll(userId: string): Observable<Reservation[]> {
    return of([
      {
        _id: 'ji349m93c2423',
        startAt: new Date(),
        endAt: new Date(),
        concept: {
          _id: 'a4dg6x1',
          name: 'Work station',
          positions: [{ name: '1', enabled: false }],
        },
        user: 'javi',
      },
    ]).pipe(delay(2000));
  }
}
