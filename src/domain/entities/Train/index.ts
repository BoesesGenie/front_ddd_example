import { TrainId } from './types.ts';
import { TrainCharacteristic } from '../TrainCharacteristic';

export class Train {
  constructor(
    public readonly id: TrainId,
    public readonly name: string,
    public readonly description: string,
    private readonly _characteristics: TrainCharacteristic[],
  ) {}

  get characteristics() {
    return [...this._characteristics];
  }
}
