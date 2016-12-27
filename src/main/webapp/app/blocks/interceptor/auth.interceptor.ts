import { Observable } from 'rxjs/Observable';
import { RequestOptionsArgs, Response } from '@angular/http';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
import { HttpInterceptable } from './http.interceptable';

export class AuthInterceptor extends HttpInterceptable {

    constructor(
        private localStorage : LocalStorageService,
        private sessionStorage : SessionStorageService
    ) {
        super();
    }

    requestIntercept(options? : RequestOptionsArgs) : RequestOptionsArgs {
        let token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
        if (!!token) {
            options.headers.append('Authorization', 'Bearer ' + token);
        }
        return options;
    }

    responseIntercept(observable: Observable<Response>) : Observable<Response> {
        return observable; //by pass
    }

}
