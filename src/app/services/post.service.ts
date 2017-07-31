import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
    private url = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http) {
    }

    getPosts(): Observable<Response> {
        return this.http.get(this.url);
    }

    createPost(post: any): Observable<Response> {
        return this.http.post(this.url, JSON.stringify(post));
    }

    updatePost(post: any, patch: any): Observable<Response> {
        return this.http.patch(this.url + '/' + post.id, JSON.stringify(patch));
    }

    deletePost(post: any): Observable<Response> {
        return this.http.delete(this.url + '/' + post.id);
    }
}
