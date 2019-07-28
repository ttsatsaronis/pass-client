import { GenericRequest } from './generic.request';

export class EventRequest extends GenericRequest {

  private priceRange: string;
  private dateRange: string;
  private exactDate: Date;
  private nightCenterTypeId: number;
  private artistId: number;
  private nightCenterId: number;
  private musicKindIds: Array<number>;

  constructor();

  constructor() {
    super();
  }

  /**
   * Getter $priceRange
   * @return {string}
   */
  public get $priceRange(): string {
    return this.priceRange;
  }

  /**
   * Setter $priceRange
   * @param {string} value
   */
  public set $priceRange(value: string) {
    this.priceRange = value;
  }

  /**
   * Getter $dateRange
   * @return {string}
   */
  public get $dateRange(): string {
    return this.dateRange;
  }

  /**
   * Setter $dateRange
   * @param {string} value
   */
  public set $dateRange(value: string) {
    this.dateRange = value;
  }

  /**
   * Getter $nightCenterTypeId
   * @return {number}
   */
  public get $nightCenterTypeId(): number {
    return this.nightCenterTypeId;
  }

  /**
   * Setter $nightCenterTypeId
   * @param {number} value
   */
  public set $nightCenterTypeId(value: number) {
    this.nightCenterTypeId = value;
  }

  /**
   * Getter $artistId
   * @return {number}
   */
  public get $artistId(): number {
    return this.artistId;
  }

  /**
   * Setter $artistId
   * @param {number} value
   */
  public set $artistId(value: number) {
    this.artistId = value;
  }

  /**
   * Getter $nightCenterId
   * @return {number}
   */
  public get $nightCenterId(): number {
    return this.nightCenterId;
  }

  /**
   * Setter $nightCenterId
   * @param {number} value
   */
  public set $nightCenterId(value: number) {
    this.nightCenterId = value;
  }

  /**
   * Getter $musicKindIds
   * @return {Array<number>}
   */
  public get $musicKindIds(): Array<number> {
    return this.musicKindIds;
  }

  /**
   * Setter $musicKindIds
   * @param {Array<number>} value
   */
  public set $musicKindIds(value: Array<number>) {
    this.musicKindIds = value;
  }

  /**
   * Getter $exactDate
   * @return {Date}
   */
  public get $exactDate(): Date {
    return this.exactDate;
  }

  /**
   * Setter $exactDate
   * @param {Date} value
   */
  public set $exactDate(value: Date) {
    this.exactDate = value;
  }
}
