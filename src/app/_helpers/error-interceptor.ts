import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {ApiUtilisateurBrokerService} from '../_broker/api-utilisateur-broker.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private apiUtilisateurBrokerService: ApiUtilisateurBrokerService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if ([401, 403].includes(err.status) && this.apiUtilisateurBrokerService.userValue) {
        // auto logout if 401 or 403 response returned from api
        this.apiUtilisateurBrokerService.logout();
      }

      const error = err.error?.message || err.statusText;
      console.error(err);
      return throwError(error);
    }));
  }
}
