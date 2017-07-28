import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-like',
    templateUrl: './like.component.html',
    styleUrls: ['./like.component.css']
})
export class LikeComponent {

    @Input('count') count: number;
    @Input('userLiked') userLiked: boolean;

    @Output('clicked') clicked = new EventEmitter();

    constructor() {
    }

    onClick() {
        this.count += this.userLiked ? -1 : 1;
        this.userLiked = !this.userLiked;
        this.clicked.emit({ wasLiked: this.userLiked });
    }
}

export interface TweetLikedEvent {
    wasLiked: boolean;
}
