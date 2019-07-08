export class Paging {

  private _pageSize: number = 20;
  private _pageNumber: number = 1;
  private _orderField: string;
  private _orderDirection: string = "desc";
  private _totalSize: number;

  constructor() { }


  /**
   * Getter pageSize
   * @return {number }
   */
  public get pageSize(): number {
    return this._pageSize;
  }

  /**
   * Setter pageSize
   * @param {number } value
   */
  public set pageSize(value: number) {
    this._pageSize = value;
  }

  /**
   * Getter pageNumber
   * @return {number }
   */
  public get pageNumber(): number {
    return this._pageNumber;
  }

  /**
   * Setter pageNumber
   * @param {number } value
   */
  public set pageNumber(value: number) {
    this._pageNumber = value;
  }

  /**
   * Getter orderField
   * @return {string}
   */
  public get orderField(): string {
    return this._orderField;
  }

  /**
   * Setter orderField
   * @param {string} value
   */
  public set orderField(value: string) {
    this._orderField = value;
  }

  /**
   * Getter orderDirection
   * @return {string }
   */
  public get orderDirection(): string {
    return this._orderDirection;
  }

  /**
   * Setter orderDirection
   * @param {string } value
   */
  public set orderDirection(value: string) {
    this._orderDirection = value;
  }

  /**
   * Getter totalSize
   * @return {number}
   */
  public get totalSize(): number {
    return this._totalSize;
  }

  /**
   * Setter totalSize
   * @param {number} value
   */
  public set totalSize(value: number) {
    this._totalSize = value;
  }
}
