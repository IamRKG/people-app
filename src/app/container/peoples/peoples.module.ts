import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeoplesRoutingModule } from './peoples-routing.module';
import { PeoplesComponent } from './peoples.component';
import { PeopleListComponent } from 'src/app/component/people-list/people-list.component';




@NgModule({
  declarations: [
    PeoplesComponent,
    PeopleListComponent
  ],
  imports: [
    CommonModule,
    PeoplesRoutingModule
  ]
})
export class PeoplesModule { }
