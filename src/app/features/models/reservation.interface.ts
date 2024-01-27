import { ConceptInterface } from './concept.interface';

export interface ReservationInterface {
  _id: string;
  startAt: Date;
  endAt: Date;
  concept: ConceptInterface;
  user: string;
}
