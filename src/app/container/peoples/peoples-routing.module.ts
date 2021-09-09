import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleDetailsComponent } from 'src/app/component/people-details/people-details.component';
import { PeoplesComponent } from './peoples.component';

const routes: Routes = [{ path: '', component: PeoplesComponent },{ path: 'details', component: PeopleDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeoplesRoutingModule { }
