import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CakesRoutingModule } from './cakes-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    CakesRoutingModule
  ]
})
export class CakesModule { }
