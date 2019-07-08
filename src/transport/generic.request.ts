import { Paging } from './helper/paging.helper';
import { Sorting } from './helper/sorting.helper';

export class GenericRequest {

  private _id: number;
  private _tableName: string;
  private _active: boolean;
  private _paging: Paging;
  private _additionalSort: Array<Sorting>;


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
   * Getter tableName
   * @return {string}
   */
  public get tableName(): string {
    return this._tableName;
  }

  /**
   * Setter tableName
   * @param {string} value
   */
  public set tableName(value: string) {
    this._tableName = value;
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

  /**
   * Getter paging
   * @return {Paging}
   */
  public get paging(): Paging {
    return this._paging;
  }

  /**
   * Setter paging
   * @param {Paging} value
   */
  public set paging(value: Paging) {
    this._paging = value;
  }

  /**
   * Getter additionalSort
   * @return {Array<Sorting>}
   */
  public get additionalSort(): Array<Sorting> {
    return this._additionalSort;
  }

  /**
   * Setter additionalSort
   * @param {Array<Sorting>} value
   */
  public set additionalSort(value: Array<Sorting>) {
    this._additionalSort = value;
  }
}
