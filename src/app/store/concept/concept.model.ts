export interface Slot {
  code: string;
  position: number;
  enabled?: boolean;
}

export interface Concept {
  id?: string;
  code: string;
  slots: Slot[];
  enabled?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
