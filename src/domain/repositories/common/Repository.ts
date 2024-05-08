export interface Repository<E, ID> {
  all(): E[];
  findById(id: ID): E | null;
}
