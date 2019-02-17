import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CreateResult} from '../../common/data';
import {UrlService} from '../../common/url';
import {Note} from './data';

const NOTES = 'notes';

@Injectable()
export class NoteService {

    constructor(
        private readonly client: HttpClient,
        private readonly url: UrlService
    ) { }

    public get(id: number): Promise<Note> {
        return this.client.get<Note>(
            this.url.buildUrl(NOTES, id)
        ).toPromise();
    }

    public select(): Promise<Note[]> {
        return this.client.get<Note[]>(
            this.url.buildUrl(NOTES)
        ).toPromise();
    }

    public create(note: Note): Promise<CreateResult> {
        return this.client.post<CreateResult>(
            this.url.buildUrl(NOTES),
            note
        ).toPromise();
    }

    public update(id: number, note: Note): Promise<any> {
        return this.client.put(
            this.url.buildUrl(NOTES, id),
            note
        ).toPromise();
    }

    public delete(id: number): Promise<any> {
        return this.client.delete(
            this.url.buildUrl(NOTES, id)
        ).toPromise();
    }

}
