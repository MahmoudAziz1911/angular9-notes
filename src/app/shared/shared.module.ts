import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsModule } from './components/layouts/layouts.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
