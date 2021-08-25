
export interface Reponse<T> {
  count: number;
  next: string;
  previous?: any;
  results: T;
}
