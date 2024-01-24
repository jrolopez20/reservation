import { ConceptInterface } from './concept.interface';
import { PositionInterface } from './position.interface';

export interface ReservationInterface {
  startAt: Date;
  endAt: Date;
  concept: ConceptInterface;
  position: PositionInterface;
}
