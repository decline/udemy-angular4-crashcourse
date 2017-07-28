import { Component } from '@angular/core';
import { FavoriteChangedEvent } from './favorite/favorite.component';
import { TweetLikedEvent } from './like/like.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    post = {
        title: 'Title',
        isFavorite: true
    };

    tweet = {
        currentCount: 41,
        userLiked: false
    };

    onFavoriteChanged(event: FavoriteChangedEvent) {
        console.log('Favorite changed! Is favorite: ' + event.isFavorite);
    }

    onTweetLiked(event: TweetLikedEvent) {
        console.log('Tweet was liked: ' + event.wasLiked);
    }
}
