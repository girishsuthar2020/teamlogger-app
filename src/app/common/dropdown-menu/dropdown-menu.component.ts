import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {
  newOption: any;
  emptyDataSelection = {
    name: 'Select'
  };

  @Input() options: any;

  @Output() currentSelectionChange = new EventEmitter<object>();

  _currentSelection: any;
  get currentSelection() {
    return this._currentSelection;
  }
  @Input()
  set currentSelection(value) {
    this._currentSelection =
      value === '' || value === null || value === undefined
        ? this.emptyDataSelection
        : value;
  }

  constructor() {
    this.newOption = '';
  }

  ngOnInit() {
    console.log("Options: ", this.options);

  }

  setCurrentSelection(option: any) {
    console.log("Current Selection : ",option);
    
    this.currentSelection = option;
    this.currentSelectionChange.emit(option);
  }

  addNewData() { }

}
