import {HttpClient} from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';
import {CreateResult} from '../../common/services/data';
import {PageRequest, PageResponse} from '../../common/services/paging';
import {UrlService} from '../../common/services/url';
import {Note} from './data';

const NOTES = 'notes';

@Injectable()
export class NoteService {

    public readonly changes = new EventEmitter<any>();

    constructor(
        private readonly client: HttpClient,
        private readonly url: UrlService
    ) { }

    public get(id: number): Promise<Note> {
        return this.client.get<Note>(
            this.url.buildUrl(NOTES, id)
        ).toPromise();
    }

    public select(request: PageRequest): Promise<PageResponse<Note>> {
        return this.client.get<PageResponse<Note>>(
            this.url.buildUrl(NOTES),
            {
                params: this.url.pageParams(request)
            }
        ).toPromise();
    }

    public async create(note: Note): Promise<CreateResult> {
        const result = await this.client.post<CreateResult>(
            this.url.buildUrl(NOTES),
            note
        ).toPromise();
        this.changes.emit();
        return result;
    }

    public async update(id: number, note: Note): Promise<any> {
        await this.client.put(
            this.url.buildUrl(NOTES, id),
            note
        ).toPromise();
        this.changes.emit();
    }

    public async delete(id: number): Promise<any> {
        await this.client.delete(
            this.url.buildUrl(NOTES, id)
        ).toPromise();
        this.changes.emit();
    }

}
