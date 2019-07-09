import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit{

  @Input() menu: any;
  selectedItem: string;

  open: boolean = false;

  ngOnInit() {
  }

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
