import { BackTop } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Position from '../components/position/Position';

const BASE_TRANSLATION_NAMESPACE = 'Layout';

const PositionPage = (): JSX.Element => {
  const { t } = useTranslation(BASE_TRANSLATION_NAMESPACE);
  const title = t('Position');

  return (
    <>
      <Position title={title} />
      <BackTop />
    </>
  );
};

export default PositionPage;
