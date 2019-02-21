import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PagingControls} from './common/components/paging.controls';
import {UrlService} from './common/services/url';
import {Error404Page} from './main/error.404';
import {StartPage} from './main/start.page';
import {NotesEdit} from './notes/components/edit/notes.edit';
import {NotesEditGeneral} from './notes/components/edit/notes.general';
import {NotesCreate} from './notes/components/notes.create';
import {NotesList} from './notes/components/notes.list';
import {NoteService} from './notes/services/service';

@NgModule({
    declarations: [
        AppComponent,
        Error404Page,
        StartPage,
        NotesCreate,
        NotesList,
        PagingControls,
        NotesEdit,
        NotesEditGeneral,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [
        UrlService,
        NoteService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
