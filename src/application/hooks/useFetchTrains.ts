import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTrains } from '../../infrastructure/store/trainSlice.ts';
import { TrainApiService } from '../../infrastructure/api/TrainApiService';

export function useFetchTrains() {
  const dispatch = useDispatch();

  useEffect(() => {
    const apiService = new TrainApiService();

    (async () => {
      const trains = await apiService.fetchAll();

      dispatch(fetchTrains(trains));
    })();
  }, []);
}
