import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Reservation } from './reservation.model';

@Injectable({providedIn: 'root'})
export class ReservationService {
  getAll(userId: string): Observable<Reservation[]> {
    return of([
      // {
      //   id: 'ji349m93c2423',
      //   startAt: new Date(),
      //   endAt: new Date(),
      //   concept: {
      //     id: 'a4dg6x1',
      //     code: 'Work station',
      //     slots: [{ code: '1', podition: 1, enabled: false }],
      //   },
      //   user: 'javi',
      // },
    ]).pipe(delay(2000));
  }
}
