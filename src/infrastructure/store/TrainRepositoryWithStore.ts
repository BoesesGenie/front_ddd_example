import { Repository } from '../../domain/repositories/common/Repository.ts';
import { Train } from '../../domain/entities/Train';
import { TrainId } from '../../domain/entities/Train/types.ts';
import { RawTrain } from '../api/TrainApiService/types.ts';
import { TrainCharacteristic } from '../../domain/entities/TrainCharacteristic';
import { TrainCharacteristicId } from '../../domain/entities/TrainCharacteristic/types.ts';

export class TrainRepositoryWithStore implements Repository<Train, TrainId> {
  private readonly trains: Map<TrainId, Train>;

  constructor(rawTrains: RawTrain[]) {
    let idPostfix = 0;

    this.trains = new Map(
      rawTrains.map((rawTrain) => {
        const trainId = `${rawTrain.name}_${++idPostfix}` as TrainId; // need unique ID

        return [
          trainId,
          new Train(
            trainId,
            rawTrain.name,
            rawTrain.description,
            rawTrain.characteristics.map((rawCharacteristic) => {
              return new TrainCharacteristic(
                `${trainId}_${rawCharacteristic.engineAmperage}_${rawCharacteristic.force}_${rawCharacteristic.speed}` as TrainCharacteristicId, // need unique ID
                rawCharacteristic.speed,
                rawCharacteristic.force,
                rawCharacteristic.engineAmperage,
              );
            }),
          ),
        ];
      }),
    );
  }

  all(): Train[] {
    return Array.from(this.trains).map(([, train]) => train);
  }

  findById(id: TrainId): Train | null {
    return this.trains.get(id) ?? null;
  }
}
