import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }

  // method to get notes from Api
  getNotes() {
    return this.http.get(`${environment.BaseUrl}/notes`);
  }
  getNoteById(id) {
    return this.http.get(`${environment.BaseUrl}/notes/${id}`);
  }
  addNote(note) {
    return this.http.post(`${environment.BaseUrl}/notes`, note);
  }
  updateNode(note, id) {
    return this.http.put(`${environment.BaseUrl}/notes/${id}`, note);
  }
  // method to Delete notes from Api
  deleteNote(id) {
    return this.http.delete(`${environment.BaseUrl}/notes/${id}`);
  }
}
