import { GenericRequest } from './generic.request';

export class EventRequest extends GenericRequest {

  private priceRange: string;
  private dateRange: string;

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
}
