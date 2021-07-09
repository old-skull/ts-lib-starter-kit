import { Point } from './index';

describe('JS Classes: Point', () => {
  it('should create instance with arguments', () => {
    expect(new Point(1, 2)).toBeInstanceOf(Point);
  });

  it('should return `x` via `getX` method', () => {
    const p = new Point(1, 2);

    expect(p.getX()).toBe(1);
  });

  it('should return `y` via `getY` method', () => {
    const p = new Point(1, 2);

    expect(p.getY()).toBe(2);
  });

  it('should return Point instance with args via static method `fromArray`', () => {
    const p = Point.fromArray([1, 2]);

    expect(p).toBeInstanceOf(Point);
    expect(p.getX()).toBe(1);
    expect(p.getY()).toBe(2);
  });
});
