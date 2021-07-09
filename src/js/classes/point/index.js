/** Class representing a point. */
export class Point {
  /**
   * Create a point.
   * @param {number} x - The x value.
   * @param {number} y - The y value.
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Get the x value.
   * @return {number} The x value.
   */
  getX() {
    return this.x;
  }

  /**
   * Get the y value.
   * @return {number} The y value.
   */
  getY() {
    return this.y;
  }

  /**
   * Convert an array of coordinates into a point.
   * @param {number[]} array - The array containing two numbers.
   * @return {Point} A Point object.
   */
  static fromArray(array) {
    return new Point(array[0], array[1]);
  }
}
