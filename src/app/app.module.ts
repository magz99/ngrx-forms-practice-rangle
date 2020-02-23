import { InvalidFieldsSelector } from './utils/error-count';
import { ConfigComponent } from './my-form/components/config/config.component';
import { PersonComponent } from './my-form/components/person/person.component';
import { rootReducer, initialState } from './store/app.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgrxFormsModule } from 'ngrx-forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, PersonComponent, ConfigComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgrxFormsModule,
    StoreModule.forRoot(rootReducer, { initialState }),
    StoreDevtoolsModule.instrument({ maxAge: 10 })
  ],
  providers: [InvalidFieldsSelector],
  bootstrap: [AppComponent]
})
export class AppModule {}
