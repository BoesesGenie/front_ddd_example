import { memo } from 'react';
import { useOnTrainListRowClickHandler } from '../../../../../../application/hooks/useOnTrainListRowClickHandler.ts';
import { TrainListRowProps } from './types.ts';

export const TrainListRow = memo(function TrainListRow({ train }: TrainListRowProps) {
  const onClick = useOnTrainListRowClickHandler(train.id);

  return (
    <tr onClick={onClick}>
      <td>{train.name}</td>
      <td>{train.description}</td>
    </tr>
  );
});
