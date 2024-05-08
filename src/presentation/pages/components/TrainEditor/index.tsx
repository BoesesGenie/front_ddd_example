import { useTrainsRepository } from '../../../../application/hooks/useTrainsRepository.ts';
import BEM from '../../../helpers/bem.ts';
import { TrainListTable } from '../TrainListTable';
import styles from './styles.module.sass';

const bem = new BEM(styles);

export function TrainEditor() {
  const trains = useTrainsRepository();

  return (
    <div className={bem.b('train-editor').show()}>
      <section className={bem.b('train-editor').e('train-list').show()}>
        <h2>Поезда</h2>
        <TrainListTable trains={trains.all()} />
      </section>
      <section>
        <h2></h2>
      </section>
    </div>
  );
}
