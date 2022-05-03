export class ApiGetException extends Error {
  constructor() {
    super('Unable to load data');
    this.name = 'ApiGetException';
  }
}
