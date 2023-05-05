import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // -------Bearer-token------
        const token: any = sessionStorage.getItem("token");
        const headers = new HttpHeaders({
            //  'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        const requestOptions = { headers: headers };

        // ------ if-not-logged-in -------
        if (!sessionStorage.getItem('token')) {
            return next.handle(httpRequest);
        }

        return next.handle(httpRequest.clone(requestOptions));
    }
}