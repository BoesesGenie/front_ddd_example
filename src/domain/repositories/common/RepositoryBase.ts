import { Repository } from './Repository.ts';

export class RepositoryBase<E, ID> implements Repository<E, ID> {
  constructor(private readonly repositoryImplementation: Repository<E, ID>) {}

  all(): E[] {
    return this.repositoryImplementation.all();
  }

  findById(id: ID) {
    return this.repositoryImplementation.findById(id);
  }
}
