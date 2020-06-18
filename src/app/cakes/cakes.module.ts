import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CakesRoutingModule } from './cakes-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { NewComponent } from './new/new.component';


@NgModule({
  declarations: [ListComponent, DetailsComponent, NewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CakesRoutingModule
  ]
})
export class CakesModule { }
