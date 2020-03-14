import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NotesService } from './../../../shared/services/notes.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.scss']
})
export class ListNoteComponent implements OnInit {
  notes: any = [];
  noteId: any;

  constructor(
    private service: NotesService,
    private toastr: ToastrService,
    private modalService: NgbModal
    ) {

  }

  ngOnInit() {
    this.getAllNotes();
  }

  getAllNotes() {
    this.service.getNotes().subscribe(data => {
      this.notes = data;
    });
  }

  delete(id) {
    this.service.deleteNote(id).subscribe(res => {
      this.toastr.success('Note Deleted Successfuly', 'success', {timeOut: 4000, closeButton: true});
      this.getAllNotes();
    }, err => {
      console.log(err);
    });
  }

  open(content, id) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
      console.log(reason);
    });
    this.noteId = id;
  }

  getUpdatedItems(updatedItems) {
    this.notes = updatedItems;
    this.modalService.dismissAll();
  }

}
