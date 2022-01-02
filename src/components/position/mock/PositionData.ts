import { nanoid } from 'nanoid';
import { Position } from '../type/Position';

const randomFloatWithSign = (): number => {
  const sign = Math.random() < 0.5 ? -1 : 1;
  return parseFloat(Number(Math.random() * 10).toFixed(1)) * sign;
};

const POSITION_DATA: Position[] = [];

for (let index = 0; index < 100; index++) {
  const entity: Position = {
    id: nanoid(),
    deliveryDateTime: Date.now() - Math.floor(Math.random() * 2000),
    creos: randomFloatWithSign(),
    amprion: randomFloatWithSign(),
    tennet: randomFloatWithSign(),
    transnetbw: randomFloatWithSign(),
    fiftyhertz: randomFloatWithSign(),
  };

  POSITION_DATA.push(entity);
}

export { POSITION_DATA };
