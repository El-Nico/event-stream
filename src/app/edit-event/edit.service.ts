import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Event } from '../models';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  isEditing: boolean;
  editingEvent: Event=null;
 _eventToEdit: BehaviorSubject<Event>= new BehaviorSubject<Event>(null)
  constructor() { }
 nextEvent(e:Event){
  this._eventToEdit.next(e);
 }
}
