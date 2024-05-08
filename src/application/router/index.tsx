import { createBrowserRouter } from 'react-router-dom';
import { TrainList } from '../../presentation/pages/TrainList';
import { TrainCharacteristics } from '../../presentation/pages/TrainCharacteristics';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TrainList />,
  },
  {
    path: '/train-characteristics',
    element: <TrainCharacteristics />,
  },
]);
