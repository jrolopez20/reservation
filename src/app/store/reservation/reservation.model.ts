import { Concept } from '../concept/concept.model';

export interface Reservation {
  id: string;
  startAt: Date;
  endAt: Date;
  concept: Concept;
  user: string;
}
