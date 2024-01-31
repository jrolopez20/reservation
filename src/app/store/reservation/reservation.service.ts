import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { CreateReservationDto, Reservation } from './reservation.model';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../core/services';
import moment from 'moment';

@Injectable({ providedIn: 'root' })
export class ReservationService {
  private readonly hostUrl: string;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.hostUrl = this.configService.getAPIUrl();
  }

  getAll(concept: string, startDate: Date): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(
      `${this.hostUrl}/concepts/${concept}/reserves`,
      {
        params: {
          startDate: moment(startDate).format('YYYY-MM-DD')
        },
      }
    );
  }

  add(reservation: CreateReservationDto): Observable<Reservation> {
    return this.http.post<Reservation>(
      `${this.hostUrl}/me/reserves`,
      reservation
    );
  }

  remove(id: string): Observable<Reservation> {
    return this.http.delete<Reservation>(`${this.hostUrl}/me/reserves/${id}`);
  }
}
