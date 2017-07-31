import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    posts: any[];

    constructor(private service: PostService) {

    }

    ngOnInit(): void {
        this.service.getPosts().subscribe(
            response => {
                this.posts = response.json();
            },
            error => {
                alert('An unexpected error occurred.');
                console.log(error);
            }
        );
    }

    createPost(input: HTMLInputElement): void {
        let post = {title: input.value};
        input.value = '';

        this.service.createPost(post).subscribe(
            response => {
                post['id'] = response.json().id;
                this.posts.splice(0, 0, post);
            },
            (error: AppError) => {
                if (error instanceof BadRequestError) {
                    // this.form.setErrors(error.originalError());
                } else {
                    alert('An unexpected error occurred.');
                    console.log(error);
                }
            }
        );
    }

    updatePost(post: any): void {
        this.service.updatePost(post, {isRead: true}).subscribe(
            response => {
                console.log(response.json());
            },
            error => {
                alert('An unexpected error occurred.');
                console.log(error);
            }
        );
    }

    deletePost(post: any): void {
        this.service.deletePost(post).subscribe(
            (response) => {
                let index = this.posts.indexOf(post);
                this.posts.splice(index, 1);
            },
            (error: AppError) => {
                if (error instanceof NotFoundError) {
                    alert('This post hast already been deleted.');
                } else {
                    alert('An unexpected error occurred.');
                    console.log(error);
                }
            }
        );
    }
}
