import {HttpClient, HttpClientModule} from '@angular/common/http';
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
import {MarkdownModule} from 'ngx-markdown';
import {SegmentsList} from './segments/components/segments.list';
import {SegmentsPanel} from './segments/components/segments.panel';
import {SegmentsEditRoot} from './segments/components/edit/segments.edit.root';
import {SegmentsViewRoot} from './segments/components/view/segments.view.root';
import {SegmentsAdd} from './segments/components/segments.add';
import {SegmentsViewText} from './segments/components/view/segments.view.text';
import {SegmentsEditText} from './segments/components/edit/segments.edit.text';
import {SegmentsViewChecklistPanel} from './segments/components/view/segments.view.checklist.panel';
import {SegmentsViewChecklistEntry} from './segments/components/view/segments.view.checklist.entry';
import {SegmentsEditChecklistPanel} from './segments/components/edit/segments.edit.checklist.panel';
import {SegmentsEditChecklistEntry} from './segments/components/edit/segments.edit.checklist.entry';

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
        SegmentsList,
        SegmentsAdd,
        SegmentsPanel,
        SegmentsEditRoot,
        SegmentsEditText,
        SegmentsEditChecklistPanel,
        SegmentsEditChecklistEntry,
        SegmentsViewRoot,
        SegmentsViewText,
        SegmentsViewChecklistPanel,
        SegmentsViewChecklistEntry,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MarkdownModule.forRoot({loader: HttpClient}),
    ],
    providers: [
        UrlService,
        NoteService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
