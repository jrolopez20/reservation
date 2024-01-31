import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Concept } from './concept.model';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../core/services';

@Injectable({ providedIn: 'root' })
export class ConceptService {
  private readonly hostUrl: string;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.hostUrl = this.configService.getAPIUrl();
  }

  getAll(): Observable<Concept[]> {
    return this.http.get<Concept[]>(`${this.hostUrl}/concepts`);
  }
}
