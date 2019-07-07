import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit{

  open: boolean = false;
  title: string;

  selectItems = [
    {
      label: 'item1'
    },
    {
      label: 'item2'
    },
    {
      label: 'item3'
    }
  ]

  ngOnInit() {
    this.title='select';

  }

  onExpand(){
    this.open = !this.open;
  }

  onSelect(item: string){
    this.open = !this.open;
    this.title = item;
  }

  onBlur(){
    if (this.open) {
      this.open = false;
      console.log('dsadsadasd')
    }
  }

}
