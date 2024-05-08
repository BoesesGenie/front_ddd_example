import { useSelector } from 'react-redux';
import { RootState } from '../../infrastructure/store';
import { useMemo } from 'react';
import { TrainRepository } from '../../domain/repositories/TrainRepository';
import { TrainRepositoryWithStore } from '../../infrastructure/store/TrainRepositoryWithStore.ts';

export function useTrainsRepository() {
  const trains = useSelector((state: RootState) => state.trains.value);

  return useMemo(() => {
    return new TrainRepository(new TrainRepositoryWithStore(trains));
  }, [trains]);
}
