import { InvalidFieldsSelector } from './utils/error-count';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appErrors$: Observable<number>;
  personErrors$: Observable<number>;
  configErrors$: Observable<number>;

  constructor(private invalidFieldsSelector: InvalidFieldsSelector) {
    this.appErrors$ = this.invalidFieldsSelector.appErrors$;
    this.personErrors$ = this.invalidFieldsSelector.personErrors$;
    this.configErrors$ = this.invalidFieldsSelector.configErrors$;
  }
}
