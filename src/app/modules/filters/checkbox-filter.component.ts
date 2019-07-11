import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'checkboxFilter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./filters.component.scss']
})
export class CheckboxFilterComponent implements OnInit {

  @Input() data: any;
  @Input() translations: any;

  showHide: number = 4;
  showHideLabel: string;

  constructor() {}

  ngOnInit() {
    this.showHideLabel = this.translations.showMoreLabel;
  }

  onSelect(name: string){
    if (this.data.has(name)) {
      this.data.set(name, !this.data.get(name));
    }
  }

  showMore() {
    this.showHide = this.showHide === 4 ? 999 : 4;
    this.showHideLabel = this.showHide === 4 ? this.translations.showMoreLabel : this.translations.hideLabel;
  }

}
