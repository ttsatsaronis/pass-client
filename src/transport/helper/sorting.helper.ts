export class Sorting {
  private _field: string;
  private _direction: string = 'asc';
  private _active: boolean = true;

  constructor() { }

  /**
   * Getter field
   * @return {string}
   */
  public get field(): string {
    return this._field;
  }

  /**
   * Setter field
   * @param {string} value
   */
  public set field(value: string) {
    this._field = value;
  }

  /**
   * Getter direction
   * @return {string }
   */
  public get direction(): string {
    return this._direction;
  }

  /**
   * Setter direction
   * @param {string } value
   */
  public set direction(value: string) {
    this._direction = value;
  }

  /**
   * Getter active
   * @return {boolean }
   */
  public get active(): boolean {
    return this._active;
  }

  /**
   * Setter active
   * @param {boolean } value
   */
  public set active(value: boolean) {
    this._active = value;
  }
}
