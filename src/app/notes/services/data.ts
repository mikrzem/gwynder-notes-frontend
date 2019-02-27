import {BaseData} from '../../common/services/data';
import {NoteSegment} from '../../segments/services/data';

export interface Note extends BaseData {

    title: string;

    segments: NoteSegment[];
}
