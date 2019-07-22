import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})

export class PagingComponent implements OnInit {
  @Input() paging: any;
  @Input() totalSize: any;
  @Output() emitPaging: EventEmitter<any> = new EventEmitter<any>();
  totalPages: number;

  ngOnInit() {}

  onCalculatePaging() {
    this.totalPages = Math.floor(this.totalSize/this.paging.$pageSize);
  }

  onNextPage() {
    this.paging.$pageNumber = this.paging.$pageNumber + 1;
    this.emitPaging.emit(this.paging);
  }

  onPreviousPage() {
    this.paging.$pageNumber = this.paging.$pageNumber - 1;
    this.emitPaging.emit(this.paging);
  }

  onFirstPage() {
    this.paging.$pageNumber = 1;
    this.emitPaging.emit(this.paging);
  }

  onLastPage() {
    this.paging.$pageNumber = Math.ceil(this.totalSize / this.paging.$pageSize);
    this.emitPaging.emit(this.paging);
  }

}
