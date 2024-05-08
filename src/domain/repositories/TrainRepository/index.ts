import { Train } from '../../entities/Train';
import { TrainId } from '../../entities/Train/types.ts';
import { RepositoryBase } from '../common/RepositoryBase.ts';
import { Repository } from '../common/Repository.ts';

export class TrainRepository extends RepositoryBase<Train, TrainId> {
  constructor(repositoryImplementation: Repository<Train, TrainId>) {
    super(repositoryImplementation);
  }
}
