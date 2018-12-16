import { TimeUnit } from './date';

describe('Date', () => {
  it('should instantiate date', () => {
    const date = new Date(2018, 10, 4, 5, 6, 7, 8);
    expect(date).toBeDefined();
    expect(date.getDate()).toBe(4);
    expect(date.getMonth()).toBe(10);
    expect(date.getFullYear()).toBe(2018);
    expect(date.getHours()).toBe(5);
    expect(date.getMinutes()).toBe(6);
    expect(date.getSeconds()).toBe(7);
    expect(date.getMilliseconds()).toBe(8);
  });
  it('should create new instance of date', () => {
    const date = new Date(2018, 10, 4, 5, 6, 7, 8);
    expect(date.startOf(TimeUnit.SECOND)).not.toBe(date);
    expect(date.endOf(TimeUnit.SECOND)).not.toBe(date);
  });
});

describe('daysInMonth', () => {
  it('should return number of days in a month', () => {
    expect((new Date(2018, 0, 4)).daysInMonth()).toBe(31); // january
    expect((new Date(2018, 1, 4)).daysInMonth()).toBe(28); // february in non leap year
    expect((new Date(2020, 1, 4)).daysInMonth()).toBe(29); // february in leap year
    expect((new Date(2018, 3, 4)).daysInMonth()).toBe(30); // april
  });
});

describe('startOf', () => {
  it('should return start of second', () => {
    const date = new Date(2018, 10, 4, 5, 6, 7, 8);
    const result = date.startOf(TimeUnit.SECOND);

    expect(result).toBeDefined();
    expect(result).not.toEqual(date);

    expect(result.getDate()).toBe(4);
    expect(result.getMonth()).toBe(10);
    expect(result.getFullYear()).toBe(2018);
    expect(result.getHours()).toBe(5);
    expect(result.getMinutes()).toBe(6);
    expect(result.getSeconds()).toBe(7);
    expect(result.getMilliseconds()).toBe(0);
  });
  it('should return start of minute', () => {
    const date = new Date(2018, 10, 4, 5, 6, 7, 8);
    const result = date.startOf(TimeUnit.MINUTE);

    expect(result).toBeDefined();
    expect(result).not.toEqual(date);

    expect(result.getDate()).toBe(4);
    expect(result.getMonth()).toBe(10);
    expect(result.getFullYear()).toBe(2018);
    expect(result.getHours()).toBe(5);
    expect(result.getMinutes()).toBe(6);
    expect(result.getSeconds()).toBe(0);
    expect(result.getMilliseconds()).toBe(0);
  });
  it('should return start of hour', () => {
    const date = new Date(2018, 10, 4, 5, 6, 7, 8);
    const result = date.startOf(TimeUnit.HOUR);

    expect(result).toBeDefined();
    expect(result).not.toEqual(date);

    expect(result.getDate()).toBe(4);
    expect(result.getMonth()).toBe(10);
    expect(result.getFullYear()).toBe(2018);
    expect(result.getHours()).toBe(5);
    expect(result.getMinutes()).toBe(0);
    expect(result.getSeconds()).toBe(0);
    expect(result.getMilliseconds()).toBe(0);
  });
  it('should return start of day', () => {
    const date = new Date(2018, 10, 4, 5, 6, 7, 8);
    const result = date.startOf(TimeUnit.DAY);

    expect(result).toBeDefined();
    expect(result).not.toEqual(date);

    expect(result.getDate()).toBe(4);
    expect(result.getMonth()).toBe(10);
    expect(result.getFullYear()).toBe(2018);
    expect(result.getHours()).toBe(0);
    expect(result.getMinutes()).toBe(0);
    expect(result.getSeconds()).toBe(0);
    expect(result.getMilliseconds()).toBe(0);
  });
  it('should return start of month', () => {
    const date = new Date(2018, 10, 4, 5, 6, 7, 8);
    const result = date.startOf(TimeUnit.MONTH);

    expect(result).toBeDefined();
    expect(result).not.toEqual(date);

    expect(result.getDate()).toBe(1);
    expect(result.getMonth()).toBe(10);
    expect(result.getFullYear()).toBe(2018);
    expect(result.getHours()).toBe(0);
    expect(result.getMinutes()).toBe(0);
    expect(result.getSeconds()).toBe(0);
    expect(result.getMilliseconds()).toBe(0);
  });
  it('should return start of year', () => {
    const date = new Date(2018, 10, 4, 5, 6, 7, 8);
    const result = date.startOf(TimeUnit.YEAR);

    expect(result).toBeDefined();
    expect(result).not.toEqual(date);

    expect(result.getDate()).toBe(1);
    expect(result.getMonth()).toBe(0);
    expect(result.getFullYear()).toBe(2018);
    expect(result.getHours()).toBe(0);
    expect(result.getMinutes()).toBe(0);
    expect(result.getSeconds()).toBe(0);
    expect(result.getMilliseconds()).toBe(0);
  });
});

describe('endOf', () => {
  it('should return end of second', () => {
    const date = new Date(2018, 10, 4, 5, 6, 7, 8);
    const result = date.endOf(TimeUnit.SECOND);

    expect(result).toBeDefined();
    expect(result).not.toEqual(date);

    expect(result.getDate()).toBe(4);
    expect(result.getMonth()).toBe(10);
    expect(result.getFullYear()).toBe(2018);
    expect(result.getHours()).toBe(5);
    expect(result.getMinutes()).toBe(6);
    expect(result.getSeconds()).toBe(7);
    expect(result.getMilliseconds()).toBe(999);
  });
  it('should return end of minute', () => {
    const date = new Date(2018, 10, 4, 5, 6, 7, 8);
    const result = date.endOf(TimeUnit.MINUTE);

    expect(result).toBeDefined();
    expect(result).not.toEqual(date);

    expect(result.getDate()).toBe(4);
    expect(result.getMonth()).toBe(10);
    expect(result.getFullYear()).toBe(2018);
    expect(result.getHours()).toBe(5);
    expect(result.getMinutes()).toBe(6);
    expect(result.getSeconds()).toBe(59);
    expect(result.getMilliseconds()).toBe(999);
  });
  it('should return end of hour', () => {
    const date = new Date(2018, 10, 4, 5, 6, 7, 8);
    const result = date.endOf(TimeUnit.HOUR);

    expect(result).toBeDefined();
    expect(result).not.toEqual(date);

    expect(result.getDate()).toBe(4);
    expect(result.getMonth()).toBe(10);
    expect(result.getFullYear()).toBe(2018);
    expect(result.getHours()).toBe(5);
    expect(result.getMinutes()).toBe(59);
    expect(result.getSeconds()).toBe(59);
    expect(result.getMilliseconds()).toBe(999);
  });
  it('should return end of day', () => {
    const date = new Date(2018, 10, 4, 5, 6, 7, 8);
    const result = date.endOf(TimeUnit.DAY);

    expect(result).toBeDefined();
    expect(result).not.toEqual(date);

    expect(result.getDate()).toBe(4);
    expect(result.getMonth()).toBe(10);
    expect(result.getFullYear()).toBe(2018);
    expect(result.getHours()).toBe(23);
    expect(result.getMinutes()).toBe(59);
    expect(result.getSeconds()).toBe(59);
    expect(result.getMilliseconds()).toBe(999);
  });
  it('should return end of month', () => {
    const date = new Date(2018, 10, 4, 5, 6, 7, 8);
    const result = date.endOf(TimeUnit.MONTH);

    expect(result).toBeDefined();
    expect(result).not.toEqual(date);

    expect(result.getDate()).toBe(30);
    expect(result.getMonth()).toBe(10);
    expect(result.getFullYear()).toBe(2018);
    expect(result.getHours()).toBe(23);
    expect(result.getMinutes()).toBe(59);
    expect(result.getSeconds()).toBe(59);
    expect(result.getMilliseconds()).toBe(999);
  });
  it('should return end of year', () => {
    const date = new Date(2018, 10, 4, 5, 6, 7, 8);
    const result = date.endOf(TimeUnit.YEAR);

    expect(result).toBeDefined();
    expect(result).not.toEqual(date);

    expect(result.getDate()).toBe(31);
    expect(result.getMonth()).toBe(11);
    expect(result.getFullYear()).toBe(2018);
    expect(result.getHours()).toBe(23);
    expect(result.getMinutes()).toBe(59);
    expect(result.getSeconds()).toBe(59);
    expect(result.getMilliseconds()).toBe(999);
  });
});
