import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotesRoutingModule } from './notes-routing.module';
import { ListNoteComponent } from './list-note/list-note.component';
import { AddEditNoteComponent } from './add-edit-note/add-edit-note.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListNoteComponent, AddEditNoteComponent],
  imports: [
    CommonModule,
    NgbModule,
    NotesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class NotesModule { }
