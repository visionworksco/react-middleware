import { EnobotTimeSerie } from './EnobotTimeSerie';
import { EnobotTimeSerieType } from './EnobotTimeSerieType';

export interface EnobotTimeSerieCollection {
  data: EnobotTimeSerie[];
  type: EnobotTimeSerieType | null;
}
