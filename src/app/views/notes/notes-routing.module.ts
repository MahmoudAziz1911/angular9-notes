import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListNoteComponent } from './list-note/list-note.component';


const routes: Routes = [
  {
    path: '',
    component: ListNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
