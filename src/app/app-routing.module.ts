import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Error404Page} from './main/error.404';
import {StartPage} from './main/start.page';
import {NotesEdit} from './notes/components/edit/notes.edit';

const routes: Routes = [
    {path: 'main', component: StartPage},
    {path: 'note/:id', component: NotesEdit},
    {path: '', pathMatch: 'full', redirectTo: '/main'},
    {path: '**', component: Error404Page},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
