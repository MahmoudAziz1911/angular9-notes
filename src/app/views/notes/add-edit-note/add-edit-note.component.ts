import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotesService } from 'src/app/shared/services/notes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-note',
  templateUrl: './add-edit-note.component.html',
  styleUrls: ['./add-edit-note.component.scss']
})
export class AddEditNoteComponent implements OnInit {
  @Input() noteId: any;
  noteDetailes: any = {};
  addForm: FormGroup;
  submitted: boolean;
  @Output() notes = new EventEmitter<any>();

  constructor(private service: NotesService,
              private fb: FormBuilder,
              private toastr: ToastrService) { }


  ngOnInit(): void {
    this.buildAddForm();
    this.getNoteDetails(this.noteId);
  }


  buildAddForm() {
    this.addForm = this.fb.group({
      id: '',
      title: [null, Validators.required],
      description: [null, Validators.required]
    });
  }

  getNoteDetails(id) {
    this.service.getNoteById(id).subscribe(res => {
    this.noteDetailes = res;
    });
  }

  onSubmit(id) {
    if (id === '' ) {
      this.add(this.addForm.value);
    } else {
      this.update(this.addForm.value, id);
    }
}

  add(data) {
    this.service.addNote(data)
    .subscribe(res => {
      this.toastr.success('note successfully added', 'success');
      this.getItems();
    }, err => {
      console.log(err);
    });
  }

  update(data, id) {
    this.service.updateNode(data, id).subscribe(res => {
      this.toastr.success('note successfully added', 'success');
      this.getItems();
    }, err => {
      console.log(err);
    });
  }

  getItems() {
    this.service.getNotes().subscribe(res => {
      this.notes.emit(res);
    });
  }
}
