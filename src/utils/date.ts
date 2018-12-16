export enum TimeUnit {
  DAY = 'day',
  YEAR = 'year',
  HOUR = 'hour',
  MONTH = 'month',
  SECOND = 'second',
  MINUTE = 'minute',
}

declare global {
  interface Date {
    daysInMonth(): number;
    startOf(unit: TimeUnit): Date;
    endOf(unit: TimeUnit): Date;
  }
}

Date.prototype.daysInMonth = function () {
  const d = new Date(this.getFullYear(), this.getMonth() + 1, 0);
  return d.getDate();
};

Date.prototype.startOf = function (unit: TimeUnit) {
  const date = new Date(this);
  switch (unit) {
    case TimeUnit.SECOND:
      date.setMilliseconds(0);
      break;
    case TimeUnit.MINUTE:
      date.setSeconds(0, 0);
      break;
    case TimeUnit.HOUR:
      date.setMinutes(0, 0, 0);
      break;
    case TimeUnit.DAY:
      date.setHours(0, 0, 0, 0);
      break;
    case TimeUnit.MONTH:
      date.setDate(1);
      date.setHours(0, 0, 0, 0);
      break;
    case TimeUnit.YEAR:
      date.setMonth(0, 1);
      date.setHours(0, 0, 0, 0);
      break;
    default:
      throw 'Invalid time unit';
  }
  return date;
};

Date.prototype.endOf = function (unit: TimeUnit) {
  const date = new Date(this);
  switch (unit) {
    case TimeUnit.SECOND:
      date.setMilliseconds(999);
      break;
    case TimeUnit.MINUTE:
      date.setSeconds(59, 999);
      break;
    case TimeUnit.HOUR:
      date.setMinutes(59, 59, 999);
      break;
    case TimeUnit.DAY:
      date.setHours(23, 59, 59, 999);
      break;
    case TimeUnit.MONTH:
      date.setDate(this.daysInMonth());
      date.setHours(23, 59, 59, 999);
      break;
    case TimeUnit.YEAR:
      date.setMonth(11, 31);
      date.setHours(23, 59, 59, 999);
      break;
    default:
      throw 'Invalid time unit';
  }
  return date;
};
