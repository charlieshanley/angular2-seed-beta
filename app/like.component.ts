import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'likebutton',
    template: `
        <i class="glyphicon-heart" [class.liked]="liked" ></i>
    `,
    styles: [`

    `]
})

export class LikeComponent {
    @Input() isLiked: Boolean;
    @Output('like-change') likeChange = new EventEmitter();

    clickLike() : void {
        this.isLiked = !this.isLiked;
        this.likeChange.emit({newValue: this.isLiked})
    }

    constructor() {
        this.isLiked = false;
    }

}