import { Component, Input } from '@angular/core';

@Component({
  selector: 'dropdownFilter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./filters.component.scss']
})
export class DropdownFilterComponent {

  @Input() header: string;
  @Input() data: string;

  constructor() {}

}
