import { TrainCharacteristicId } from './types.ts';

export class TrainCharacteristic {
  constructor(
    public readonly id: TrainCharacteristicId,
    public readonly speed: number,
    public readonly force: number,
    public readonly engineAmperage: number,
  ) {}
}
