export class Sorting {
  private field: string;
  private direction: string = 'asc';
  private active: boolean = true;

  constructor() { }

  /**
   * Getter $field
   * @return {string}
   */
  public get $field(): string {
    return this.field;
  }

  /**
   * Setter $field
   * @param {string} value
   */
  public set $field(value: string) {
    this.field = value;
  }

  /**
   * Getter $direction
   * @return {string }
   */
  public get $direction(): string {
    return this.direction;
  }

  /**
   * Setter $direction
   * @param {string } value
   */
  public set $direction(value: string) {
    this.direction = value;
  }

  /**
   * Getter $active
   * @return {boolean }
   */
  public get $active(): boolean {
    return this.active;
  }

  /**
   * Setter $active
   * @param {boolean } value
   */
  public set $active(value: boolean) {
    this.active = value;
  }

}
