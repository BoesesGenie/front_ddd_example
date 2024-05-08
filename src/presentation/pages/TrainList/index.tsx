import { useFetchTrains } from '../../../application/hooks/useFetchTrains.ts';
import { TrainEditor } from '../components/TrainEditor';

export function TrainList() {
  useFetchTrains();

  return <TrainEditor />;
}
