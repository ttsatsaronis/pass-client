import { GenericRequest } from './generic.request';

export class NightCenterRequest extends GenericRequest {

  private typeId: string;
  private artistId: string;
  private musicKindIds: Array<number>;

  constructor();

  constructor() {
    super();
  }

  /**
   * Getter $typeId
   * @return {string}
   */
  public get $typeId(): string {
    return this.typeId;
  }

  /**
   * Setter $typeId
   * @param {string} value
   */
  public set $typeId(value: string) {
    this.typeId = value;
  }

  /**
   * Getter $artistId
   * @return {string}
   */
  public get $artistId(): string {
    return this.artistId;
  }

  /**
   * Setter $artistId
   * @param {string} value
   */
  public set $artistId(value: string) {
    this.artistId = value;
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

}
