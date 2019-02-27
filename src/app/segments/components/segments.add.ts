import {Component, Input} from '@angular/core';
import {Note} from '../../notes/services/data';
import {NoteSegment} from '../services/data';

@Component({
    selector: 'segments-add',
    templateUrl: 'segments.add.html'
})
export class SegmentsAdd {

    @Input()
    public note: Note;

    @Input()
    public index: number = 0;

    public text() {
        this.addSegment({
            text: {
                text: null
            }
        });
    }

    public checklist() {
        this.addSegment({
            checklist: {
                entries: [
                    {
                        text: null,
                        checked: false,
                        entries: []
                    }
                ]
            }
        });
    }

    private addSegment(segment: NoteSegment) {
        this.note.segments.splice(this.index, 0, segment);
    }

}
