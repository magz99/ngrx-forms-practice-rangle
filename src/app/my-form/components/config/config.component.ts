import { Store, select } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { Component } from '@angular/core';
import { Config } from 'protractor';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app-state.interface';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent {
  configForm$: Observable<FormGroupState<Config>>;
  constructor(private store: Store<AppState>) {
    this.configForm$ = this.store.pipe(
      select(state => state.form.controls.config as FormGroupState<Config>)
    );
  }
}
