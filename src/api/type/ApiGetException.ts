import i18next from 'i18next';

export class ApiGetException extends Error {
  constructor() {
    super(i18next.t('Exception:Unable to load data'));
    this.name = 'ApiGetException';
  }
}
