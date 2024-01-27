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
