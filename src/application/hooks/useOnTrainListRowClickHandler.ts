import { TrainId } from '../../domain/entities/Train/types.ts';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { ROUTES } from '../router/routes.ts';

export function useOnTrainListRowClickHandler(trainId: TrainId) {
  const navigate = useNavigate();

  return useCallback(() => {
    navigate(`${ROUTES.characteristics}/${trainId}`);
  }, [navigate, trainId]);
}
