import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UrlService} from './common/url';
import {Error404Page} from './main/error.404';
import {StartPage} from './main/start.page';
import {NotesCreate} from './notes/components/notes.create';
import {NoteService} from './notes/services/service';

@NgModule({
    declarations: [
        AppComponent,
        Error404Page,
        StartPage,
        NotesCreate,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        UrlService,
        NoteService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
