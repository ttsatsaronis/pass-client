import { Component, Input } from '@angular/core';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  @Input() menu: any;
  @Input() widthSize: string;
  @Input() blackYellow: boolean;
  @Input() iconOff: string;
  @Input() iconOn: string;
  selectedItem: string;

  open: boolean = false;
  day: any;

  days: any = ['Δ','Τ','Τ','Π','Π','Σ','Κ'];

  onExpand(){
    this.open = !this.open;

    this.day = new Date();
    console.log (this.days);
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
