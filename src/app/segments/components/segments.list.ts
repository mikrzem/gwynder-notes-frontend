import {Component, Input} from '@angular/core';
import {Note} from '../../notes/services/data';

@Component({
    selector: 'segments-list',
    templateUrl: 'segments.list.html'
})
export class SegmentsList {

    @Input()
    public note: Note;

}
