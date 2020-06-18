import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [{
  path: '',
  component: ListComponent
},{
  path: 'cake/new',
  component: NewComponent
},{
  path: 'cake/:id',
  component: DetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CakesRoutingModule { }
