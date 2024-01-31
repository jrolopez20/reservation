export interface Reservation {
  id: string;
  account: string;
  concept: string;
  slot: string;
  date: Date;
  createdAt: Date;
}

export interface CreateReservationDto {
  concept: string;
  slot: string;
  date: string;
}
