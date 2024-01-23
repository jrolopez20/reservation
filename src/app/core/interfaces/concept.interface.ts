export interface ConceptInterface {
  _id: string;
  name: string;
  positions: any[];
  available: boolean;
}

export const CONCEPTS: ConceptInterface[] = [
  {
    _id: 'a4dg6x1',
    name: 'Work station',
    positions: [],
    available: true,
  },
  {
    _id: 'n21f256',
    name: 'Parking',
    positions: [],
    available: true,
  },
];
