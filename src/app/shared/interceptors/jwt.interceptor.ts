import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.url.startsWith(environment.BaseUrl)) {
    request = request.clone({
      setHeaders: {
        // tslint:disable-next-line:max-line-length
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFiaGFyd29ya3MuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE1ODQxOTgzNzcsImV4cCI6MTU4NDIwMTk3N30.8MJqzJ84NlylZmTWMrb6qZ5CneKsNmekXB-FzDNtbC0`
      }
    });
  }
    return next.handle(request);
  }
}
