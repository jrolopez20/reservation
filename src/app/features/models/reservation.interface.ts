import { ConceptInterface } from './concept.interface';

export interface ReservationInterface {
  _id: string;
  startAt: Date;
  endAt: Date;
  concept: ConceptInterface;
  user: string;
}

export const RESERVATIONS: ReservationInterface[] = [
  {
    _id: 'ji349m93c2423',
    startAt: new Date(),
    endAt: new Date(),
    concept: {
      _id: 'a4dg6x1',
      name: 'Work station',
      positions: [
        { name: '1', enabled: false },
      ]
    },
    user: 'javi'
  }
]
