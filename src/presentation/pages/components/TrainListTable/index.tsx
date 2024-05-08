import { TrainListTableProps } from './types.ts';
import { TrainListRow } from './components/TrainListRow';

export function TrainListTable({ trains }: TrainListTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Название</th>
          <th>Описание</th>
        </tr>
      </thead>
      <tbody>
        {trains.map((train) => (
          <TrainListRow key={train.id} train={train} />
        ))}
      </tbody>
    </table>
  );
}
