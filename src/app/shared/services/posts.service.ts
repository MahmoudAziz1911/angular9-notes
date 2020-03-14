import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {}

  getAllPosts() {
    return this.http.get(`${environment.BaseUrl}/posts`);
  }
  // to delete post from api
  delete(id) {
    return this.http.delete(`${environment.BaseUrl}/posts/${id}`);
  }

  // method to add new post
  add(post) {
    return this.http.post(`${environment.BaseUrl}/posts`, post);
  }

  getPostById(id) {
    return this.http.get(`${environment.BaseUrl}/posts/${id}`);
  }

  update(post, id) {
    return this.http.put(`${environment.BaseUrl}/posts/${id}`, post);
  }
}
