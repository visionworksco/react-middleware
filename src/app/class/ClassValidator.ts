import * as Validator from 'class-validator';

export class ClassValidator {
  static async validate(
    obj: any,
    skipMissingProperties: boolean,
  ): Promise<Record<string, string[]>> {
    try {
      const options: Validator.ValidatorOptions = {
        skipUndefinedProperties: false,
        skipNullProperties: false,
        skipMissingProperties,
        dismissDefaultMessages: false,
        validationError: {
          target: true,
          value: true,
        },
        forbidUnknownValues: false,
      };

      const errors = await Validator.validate(obj, options);
      if (errors.length === 0) {
        return Promise.resolve({});
      }

      const errorsUpdated = this.reduceErrors({}, errors);
      return Promise.resolve(errorsUpdated);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  private static reduceErrors(
    accumulator: Record<string, string[]>,
    errors: Validator.ValidationError[],
  ): Record<string, string[]> {
    let accumulatorUpdated = { ...accumulator };
    errors.forEach((error) => {
      if (error.constraints) {
        accumulatorUpdated[error.property] = Object.values(error.constraints);
      }
      if (error.children) {
        accumulatorUpdated = this.reduceErrors(accumulatorUpdated, error.children);
      }
    });
    return accumulatorUpdated;
  }
}
