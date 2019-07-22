export class Paging {

  private pageSize: number = 12;
  private pageNumber: number = 1;
  private orderField: string;
  private orderDirection: string = "desc";
  private totalSize: number;

  constructor() { }

  /**
   * Getter $pageSize
   * @return {number }
   */
  public get $pageSize(): number {
    return this.pageSize;
  }

  /**
   * Setter $pageSize
   * @param {number } value
   */
  public set $pageSize(value: number) {
    this.pageSize = value;
  }

  /**
   * Getter $pageNumber
   * @return {number }
   */
  public get $pageNumber(): number {
    return this.pageNumber;
  }

  /**
   * Setter $pageNumber
   * @param {number } value
   */
  public set $pageNumber(value: number) {
    this.pageNumber = value;
  }

  /**
   * Getter $orderField
   * @return {string}
   */
  public get $orderField(): string {
    return this.orderField;
  }

  /**
   * Setter $orderField
   * @param {string} value
   */
  public set $orderField(value: string) {
    this.orderField = value;
  }

  /**
   * Getter $orderDirection
   * @return {string }
   */
  public get $orderDirection(): string {
    return this.orderDirection;
  }

  /**
   * Setter $orderDirection
   * @param {string } value
   */
  public set $orderDirection(value: string) {
    this.orderDirection = value;
  }

  /**
   * Getter $totalSize
   * @return {number}
   */
  public get $totalSize(): number {
    return this.totalSize;
  }

  /**
   * Setter $totalSize
   * @param {number} value
   */
  public set $totalSize(value: number) {
    this.totalSize = value;
  }
}
