type RawCharacteristic = {
  speed: number;
  force: number;
  engineAmperage: number;
};

export type RawTrain = {
  name: string;
  description: string;
  characteristics: RawCharacteristic[];
};
