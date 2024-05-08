export interface ApiService<R> {
  fetchAll(): Promise<R[]>;
}
