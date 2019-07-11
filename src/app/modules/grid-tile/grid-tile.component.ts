import { Component, Input } from '@angular/core';

@Component({
  selector: 'gridTile',
  templateUrl: './grid-tile.component.html',
  styleUrls: ['./grid-tile.component.scss']
})
export class GridTileComponent {

  @Input() item: any;


}
