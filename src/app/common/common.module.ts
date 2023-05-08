import { NgModule } from '@angular/core';

import { CommonRoutingModule } from './common-routing.module';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DropdownMenuModule } from './dropdown-menu/dropdown-menu.module';


@NgModule({
  declarations: [
  ],
  bootstrap: [CommonModule],
  imports: [
    FormsModule,
    CommonRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropdownMenuModule
  ],
  exports: [
    DropdownMenuModule
  ]
})
export class CommonModule { }
