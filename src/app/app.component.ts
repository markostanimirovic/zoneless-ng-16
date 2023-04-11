import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>{{ title() }}</h1>',
})
export class AppComponent {
  title = signal('zoneless-ng-16');

  constructor() {
    effect(() => console.log(this.title()));
  }
}
