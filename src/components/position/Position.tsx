import { ProColumns } from '@ant-design/pro-table';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Config } from '../../config/Config';
import { Titlable } from '../../type/Titlable';
import { DateUtils } from '../../utils/DateUtils';
import { POSITION_DATA } from './mock/PositionData';
import { Position as PositionType } from './type/Position';

const BASE_TRANSLATION_NAMESPACE = 'Position';
const { GUTTER } = Config;

type TableItem = PositionType;
const table: TableItem[] = POSITION_DATA;

type Props = Titlable;

const Position = (props: Props): JSX.Element => {
  const { title } = props;

  const { t } = useTranslation(BASE_TRANSLATION_NAMESPACE);

  const loading = false;
  const error = null;

  const columns: ProColumns<TableItem>[] = [
    {
      title: t('Delivery datetime'),
      dataIndex: 'deliveryDateTime',
      render: (_, entity) => {
        const date = DateUtils.fromMilliseconds(entity.deliveryDateTime);
        return DateUtils.toString(date, 'YYYY-MM-DD hh:mm:ss');
      },
    },
    {
      title: t('creos'),
      dataIndex: 'creos',
      align: 'right',
      sorter: (a, b) => a.creos - b.creos,
    },
    {
      title: t('amprion'),
      dataIndex: 'amprion',
      align: 'right',
      sorter: (a, b) => a.amprion - b.amprion,
    },
    {
      title: t('tennet'),
      dataIndex: 'tennet',
      align: 'right',
      sorter: (a, b) => a.tennet - b.tennet,
    },
    {
      title: t('transnetbw'),
      dataIndex: 'transnetbw',
      align: 'right',
      sorter: (a, b) => a.transnetbw - b.transnetbw,
    },
    {
      title: t('fiftyhertz'),
      dataIndex: 'fiftyhertz',
      align: 'right',
      sorter: (a, b) => a.fiftyhertz - b.fiftyhertz,
    },
  ];

  return <div>this is a test</div>;
};

export default Position;
