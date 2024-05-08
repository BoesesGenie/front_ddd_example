import { useTrainsRepository } from '../../../../application/hooks/useTrainsRepository.ts';

export function TrainListTable() {
  const trains = useTrainsRepository();

  return (
    <table>
      <thead>
        <tr>
          <th>Название</th>
          <th>Описание</th>
        </tr>
      </thead>
      <tbody>
        {trains.all().map((train) => (
          <tr key={train.id}>
            <td>{train.name}</td>
            <td>{train.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
