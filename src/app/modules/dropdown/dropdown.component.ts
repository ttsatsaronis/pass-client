import { Component, Input } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  @Input() menu: any;
  @Input() widthSize: string;
  @Input() blackYellow: boolean;
  @Input() iconOff: string;
  @Input() iconOn: string;
  selectedItem: string;

  open: boolean = false;

  onExpand(){
    this.open = !this.open;
  }

  onSelect(item: string){
    this.open = !this.open;
    this.selectedItem = item;
  }

  onBlur(){
    if (this.open) {
      this.open = false;
    }
  }

}
