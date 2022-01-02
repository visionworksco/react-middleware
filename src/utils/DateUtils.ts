import moment from 'moment';

type DateFormat = 'YYYY' | 'YYYY-MM' | 'YYYY-MM-DD' | 'DD MMM' | 'DD MMM YYYY';
type TimeFormat = 'hh:mm' | 'hh:mm:ss' | 'hh:mm:ss.s';
type DateTimeFormat =
  | 'YYYY-MM-DD hh:mm'
  | 'YYYY-MM-DD hh:mm:ss'
  | 'YYYY-MM-DD hh:mm Z'
  | 'DD MMM YYYY hh:mm'
  | 'DD MMM YYYY hh:mm:ss'
  | 'DD MMM YYYY hh:mm:ss Z'
  | 'YYYY-MM-DDThh:mm:ssZ'
  | 'YYYYMMDDHH:mm';

export type DateFormatOptions = DateFormat | TimeFormat | DateTimeFormat;

export class DateUtils {
  static fromISOString(isoDate: string): Date {
    return new Date(isoDate);
  }

  static toISOString(date: Date): string {
    return date.toJSON();
  }

  static fromMilliseconds(ms: number): Date {
    return new Date(ms);
  }

  static toMilliseconds(date: Date): number {
    return date.getTime();
  }

  static fromString(dateStr: string, options: DateFormatOptions): Date {
    return moment(dateStr, options).toDate();
  }

  static toString(date: Date, options: DateFormatOptions): string {
    return moment(date).format(options);
  }

  static toTimeStringFromSeconds(seconds: number): string {
    return moment.utc(seconds * 1000).format('HH:mm:ss');
  }

  static defaultTimeStr = (): string => {
    return '00:00:00';
  };

  static millisecondsFromMinutes = (minutes: number): number => {
    return 1000 * 60 * minutes;
  };

  static roundDateToMinutes = (date: Date, minutes: number): Date => {
    const ms = DateUtils.millisecondsFromMinutes(minutes);
    return new Date(Math.round(date.getTime() / ms) * ms);
  };

  static isStartOfHour = (dateStr: string | null): boolean => {
    const date = dateStr ? DateUtils.fromString(dateStr, 'YYYY-MM-DD hh:mm Z') : null;

    return !!date && date.getMinutes() === 0;
  };

  static splitEndOfDayToMinutes = (
    date: Date,
    minutes: number,
    dateTimeFormat = 'YYYY-MM-DD hh:mm Z' as DateFormatOptions,
  ): string[] => {
    const intervals: string[] = [];

    const startDayOfMonth = moment(date).date();
    let dateRounded = DateUtils.roundDateToMinutes(date, minutes);
    let roundedDayOfMonth = moment(dateRounded).date();

    while (startDayOfMonth === roundedDayOfMonth) {
      intervals.push(DateUtils.toString(dateRounded, dateTimeFormat));
      dateRounded = moment(dateRounded).add(minutes, 'minutes').toDate();
      roundedDayOfMonth = moment(dateRounded).date();
    }

    let intervalsUpdated = [...intervals];
    if (intervals.length > 0) {
      const currentDate = new Date();
      const firstIntervalDate = DateUtils.fromString(intervals[0], dateTimeFormat);

      // return only future intervals
      if (firstIntervalDate.getTime() < currentDate.getTime()) {
        intervalsUpdated = intervals.slice(1);
      }

      // if date is a current date then a first quarter should be currentTime >= ${minutes} mins
      const currentDateFormatted = DateUtils.toString(currentDate, 'YYYY-MM-DD');
      const dateFromatted = DateUtils.toString(date, 'YYYY-MM-DD');
      const isCurrentDate = currentDateFormatted === dateFromatted;
      if (isCurrentDate) {
        const firstIntervalDate = DateUtils.fromString(intervalsUpdated[0], dateTimeFormat);
        const cutoffDate = moment(currentDate).add(minutes, 'minutes').toDate();
        if (cutoffDate.getTime() - firstIntervalDate.getTime() > 0) {
          intervalsUpdated = intervalsUpdated.slice(1);
        }
      }
    }

    return intervalsUpdated;
  };

  static splitEndOfDayToMinuteIntervals = (date: Date, minutes: number): string[] => {
    const intervals = DateUtils.splitEndOfDayToMinutes(date, minutes, 'YYYYMMDDHH:mm');

    const intervalsPaired: string[] = [];
    for (let i = 0; i < intervals.length; i++) {
      const startDate = intervals[i];

      let endDate: string | undefined = undefined;
      i = i + 1;
      if (i < intervals.length) {
        endDate = intervals[i];
      }

      if (startDate && endDate) {
        intervalsPaired.push(`${startDate}-${endDate}`);
      }
    }

    return intervalsPaired;
  };

  static splitEndOfDayToHourIntervals = (date: Date): string[] => {
    const intervals = DateUtils.splitEndOfDayToMinutes(date, 60, 'YYYYMMDDHH:mm');

    const intervalsPaired: string[] = [];
    for (let i = 0; i < intervals.length; i++) {
      const startDate = intervals[i];

      let endDate: string | undefined = undefined;
      i = i + 1;
      if (i < intervals.length) {
        endDate = intervals[i];
      }

      if (startDate && endDate) {
        intervalsPaired.push(`${startDate}-${endDate}`);
      }
    }

    return intervalsPaired;
  };
}
