import { TrainListTable } from '../components/TrainListTable';
import { useFetchTrains } from '../../../application/hooks/useFetchTrains.ts';

export function TrainList() {
  useFetchTrains();

  return <TrainListTable />;
}
