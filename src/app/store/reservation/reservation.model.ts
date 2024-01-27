import { Concept } from '../concept/concept.model';

export interface Reservation {
  _id: string;
  startAt: Date;
  endAt: Date;
  concept: Concept;
  user: string;
}
