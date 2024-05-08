import { ApiService } from '../common/ApiService.ts';
import { RawTrain } from './types.ts';

const API_URL =
  'https://gist.githubusercontent.com/allbel/ae2f8ead09baf7bb66d281e3a6050261/raw/4c898f101913cd7918ab1dbfce008fa12c6d4838/mock.json';

export class TrainApiService implements ApiService<RawTrain> {
  async fetchAll() {
    const result = await fetch(API_URL);
    const data = await result.json();

    return data as RawTrain[];
  }
}
