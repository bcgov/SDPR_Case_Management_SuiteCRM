import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  private deselectAllSubject = new Subject<void>();

  deselectAll$ = this.deselectAllSubject.asObservable();

  deselectAll(): void {
    this.deselectAllSubject.next();
  }
}
