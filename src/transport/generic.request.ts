import { Paging } from './helper/paging.helper';
import { Sorting } from './helper/sorting.helper';

export class GenericRequest {

  private id: number;
  private tableName: string;
  private active: boolean;
  private showDetails: boolean;
  private paging: Paging;
  private additionalSort: Array<Sorting>;

  constructor(tableName?: string);

  constructor(tableName: string) {
    this.$tableName = tableName;
  }

  /**
   * Getter $id
   * @return {number}
   */
  public get $id(): number {
    return this.id;
  }

  /**
   * Setter $id
   * @param {number} value
   */
  public set $id(value: number) {
    this.id = value;
  }

  /**
   * Getter $tableName
   * @return {string}
   */
  public get $tableName(): string {
    return this.tableName;
  }

  /**
   * Setter $tableName
   * @param {string} value
   */
  public set $tableName(value: string) {
    this.tableName = value;
  }

  /**
   * Getter $active
   * @return {boolean}
   */
  public get $active(): boolean {
    return this.active;
  }

  /**
   * Setter $active
   * @param {boolean} value
   */
  public set $active(value: boolean) {
    this.active = value;
  }

  /**
   * Getter $paging
   * @return {Paging}
   */
  public get $paging(): Paging {
    return this.paging;
  }

  /**
   * Setter $paging
   * @param {Paging} value
   */
  public set $paging(value: Paging) {
    this.paging = value;
  }

  /**
   * Getter $additionalSort
   * @return {Array<Sorting>}
   */
  public get $additionalSort(): Array<Sorting> {
    return this.additionalSort;
  }

  /**
   * Setter $additionalSort
   * @param {Array<Sorting>} value
   */
  public set $additionalSort(value: Array<Sorting>) {
    this.additionalSort = value;
  }

  /**
   * Getter $showDetails
   * @return {boolean}
   */
  public get $showDetails(): boolean {
    return this.showDetails;
  }

  /**
   * Setter $showDetails
   * @param {boolean} value
   */
  public set $showDetails(value: boolean) {
    this.showDetails = value;
  }

}
