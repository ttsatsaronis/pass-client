export class GenericResponse {

  private _id: number;
  private _name: string;
  private _imageUrl: string;
  private _active: boolean;


  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Getter imageUrl
   * @return {string}
   */
  public get imageUrl(): string {
    return this._imageUrl;
  }

  /**
   * Setter imageUrl
   * @param {string} value
   */
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }

  /**
   * Getter active
   * @return {boolean}
   */
  public get active(): boolean {
    return this._active;
  }

  /**
   * Setter active
   * @param {boolean} value
   */
  public set active(value: boolean) {
    this._active = value;
  }

}
