import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'gridTile',
  templateUrl: './grid-tile.component.html',
  styleUrls: ['./grid-tile.component.scss']
})
export class GridTileComponent {

  @Input() item: any;

  constructor(
    private router: Router,
  ) {}

  onNavigate(path: string, paramId: number) {
    this.router.navigate(["/", path, paramId]);
  }


}
