import {Component} from 'angular2/core';

@Component({
    selector: 'subscription-form',
    templateUrl: 'app/subscription-form.component.html'
})
export class SubscriptionFormComponent {
    frequency_options = ['Daily', 'Weekly', 'Monthly'];

    onSubmit(form) {
        console.log(form);
    }
}