import { PositionInterface } from './position.interface';

export interface ConceptInterface {
  _id: string;
  name: string;
  positions: PositionInterface[];
  available: boolean;
}

export const CONCEPTS: ConceptInterface[] = [
  {
    _id: 'a4dg6x1',
    name: 'Work station',
    positions: [
      { name: '1' },
      { name: '2' },
      { name: '3' },
      { name: '4' },
      { name: '5' },
      { name: '6' },
      { name: '7' },
    ],
    available: true,
  },
  {
    _id: 'n21f256',
    name: 'Parking',
    positions: [
      { name: 'A' },
      { name: 'B' },
      { name: 'C' },
      { name: 'D' },
    ],
    available: true,
  },
];
