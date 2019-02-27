import {Component, Input} from '@angular/core';
import {NoteSegment} from '../../services/data';
import {Note} from '../../../notes/services/data';

@Component({
    selector: 'segments-edit',
    templateUrl: 'segments.edit.root.html'
})
export class SegmentsEditRoot {

    @Input()
    public segment: NoteSegment;

    @Input()
    public note: Note;

}
