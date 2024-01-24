import { PositionInterface } from './position.interface';

export interface ConceptInterface {
  _id: string;
  name: string;
  positions: PositionInterface[];
  enabled: boolean;
}

export const CONCEPTS: ConceptInterface[] = [
  {
    _id: 'a4dg6x1',
    name: 'Work station',
    positions: [
      { name: '1', enabled: false },
      { name: '2', enabled: true },
      { name: '3', enabled: true },
      { name: '4', enabled: false },
      { name: '5', enabled: true },
      { name: '6', enabled: true },
      { name: '7', enabled: true },
    ],
    enabled: true,
  },
  {
    _id: 'n21f256',
    name: 'Parking',
    positions: [
      { name: 'A', enabled: true },
      { name: 'B', enabled: false },
      { name: 'C', enabled: true },
      { name: 'D', enabled: true },
    ],
    enabled: true,
  },
];
