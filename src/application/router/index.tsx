import { createBrowserRouter } from 'react-router-dom';
import { TrainList } from '../../presentation/pages/TrainList';
import { TrainCharacteristics } from '../../presentation/pages/TrainCharacteristics';
import { ROUTES } from './routes.ts';

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <TrainList />,
  },
  {
    path: `${ROUTES.characteristics}/:trainId`,
    element: <TrainCharacteristics />,
  },
]);
