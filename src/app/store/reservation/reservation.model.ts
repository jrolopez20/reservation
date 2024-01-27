export interface Position {
  name: string;
  enabled?: boolean;
}

export interface Concept {
  _id: string;
  name: string;
  positions: Position[];
  enabled?: boolean;
}

export interface Reservation {
  _id: string;
  startAt: Date;
  endAt: Date;
  concept: Concept;
  user: string;
}
