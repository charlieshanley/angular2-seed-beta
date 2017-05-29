import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'likebutton',
    template: `
    <div>
        <i
            class="glyphicon glyphicon-heart"
            [class.liked]="isLiked"
            (click)="clickLike()">
        </i>
        <span>{{ nLikes }}</span>
    </div>
    `,
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }
        .liked {
            color: deeppink;
        }
    `]
})

export class LikeComponent {
    @Input() isLiked: Boolean;
    @Input() nLikes: number;
    @Output('like-change') likeChange = new EventEmitter();

    clickLike() : void {
        this.isLiked = !this.isLiked;
        this.nLikes += this.isLiked ? 1 : -1;
        this.likeChange.emit({isLiked: this.isLiked, nLikes: this.nLikes})
    }

    constructor() {
        this.isLiked = false;
        this.nLikes = 0;
    }

}