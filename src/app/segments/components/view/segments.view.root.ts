import {Component, Input} from '@angular/core';
import {NoteSegment} from '../../services/data';
import {Note} from '../../../notes/services/data';

@Component({
    selector: 'segments-view',
    templateUrl: 'segments.view.root.html'
})
export class SegmentsViewRoot {

    @Input()
    public segment: NoteSegment;

    @Input()
    public note: Note;

}
