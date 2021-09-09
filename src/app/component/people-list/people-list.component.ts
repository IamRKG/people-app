import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  @Input() peoples:any;
  @Output() peopleItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  getPeopleItem(value: string) {
    this.peopleItemEvent.emit(value);
  }

  

}
