import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class DataService {

    constructor(private url: string, private http: Http) {

    }

    getAll(): Observable<Response> {
        return this.http.get(this.url);
    }

    create(resource: any): Observable<Response> {
        return this.http.post(this.url, JSON.stringify(resource)).catch(this.handleError);
    }

    update(resource: any, patch: any): Observable<Response> {
        return this.http.patch(this.url + '/' + resource.id, JSON.stringify(patch)).catch(this.handleError);
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(this.url + '/' + id).catch(this.handleError);
    }

    private handleError(error: Response) {
        if (error.status === 400) {
            return Observable.throw(new BadRequestError(error));
        }
        if (error.status === 404) {
            return Observable.throw(new NotFoundError(error));
        }
        return Observable.throw(new AppError(error));
    }
}
