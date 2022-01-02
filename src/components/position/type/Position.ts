import { ApiEntity } from '../../../api/type/ApiEntity';

export interface Position extends ApiEntity {
  deliveryDateTime: number;
  creos: number;
  amprion: number;
  tennet: number;
  transnetbw: number;
  fiftyhertz: number;
}
