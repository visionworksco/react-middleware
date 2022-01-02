import { Expose } from 'class-transformer';
import { EnobotTimeSerie } from './EnobotTimeSerie';

export class EnobotTimeSerieEntity implements EnobotTimeSerie {
  @Expose()
  ts: string | null = null;

  @Expose()
  value: number | null = null;

  @Expose()
  ts2: string | null = null;

  @Expose()
  value2: number | null = null;
}
