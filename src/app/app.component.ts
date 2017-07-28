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

    listView = {
        viewMode: 'map'
    };

    listOfCourses = [
        {id: 1, name: 'course1'},
        {id: 2, name: 'course2'},
        {id: 3, name: 'course3'}
    ];

    heroes;

    canSave = true;

    onFavoriteChanged(event: FavoriteChangedEvent) {
        console.log('Favorite changed! Is favorite: ' + event.isFavorite);
    }

    onTweetLiked(event: TweetLikedEvent) {
        console.log('Tweet was liked: ' + event.wasLiked);
    }

    onListAdd() {
        this.listOfCourses.push({id: 4, name: 'course4'});
    }

    onListRemove(course) {
        const index = this.listOfCourses.indexOf(course);
        this.listOfCourses.splice(index, 1);
    }

    onListUpdate(course) {
        course.name = 'UPDATED!';
    }

    loadHeroes() {
        this.heroes = [
            {id: 1, name: 'spongebob'},
            {id: 2, name: 'patrick'},
            {id: 3, name: 'thaddeus'}
        ];
    }

    trackHero(index, hero) {
        return hero ? hero.id : undefined;
    }
}
