import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownMenuComponent } from './dropdown-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DropdownMenuComponent],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [DropdownMenuComponent],
  bootstrap: [DropdownMenuComponent],
})
export class DropdownMenuModule { }
