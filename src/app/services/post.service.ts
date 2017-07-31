import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

@Injectable()
export class PostService {
    private url = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http) {
    }

    getPosts(): Observable<Response> {
        return this.http.get(this.url);
    }

    createPost(post: any): Observable<Response> {
        return this.http.post(this.url, JSON.stringify(post))
            .catch((error: Response) => {
                if (error.status === 400) {
                    return Observable.throw(new BadRequestError(error));
                }
                return Observable.throw(new AppError(error));
            });
    }

    updatePost(post: any, patch: any): Observable<Response> {
        return this.http.patch(this.url + '/' + post.id, JSON.stringify(patch));
    }

    deletePost(post: any): Observable<Response> {
        return this.http.delete(this.url + '/' + post.id)
            .catch((error: Response) => {
                if (error.status === 404) {
                    return Observable.throw(new NotFoundError(error));
                }
                return Observable.throw(new AppError(error));
            });
    }
}
