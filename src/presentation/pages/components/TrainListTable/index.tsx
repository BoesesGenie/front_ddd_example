import { TrainListTableProps } from './types.ts';

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
          <tr key={train.id}>
            <td>{train.name}</td>
            <td>{train.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
