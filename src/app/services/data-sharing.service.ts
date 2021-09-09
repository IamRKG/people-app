import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor() { }

  private behaviorSubject = new BehaviorSubject<any>(0);

  sendData(data: any) {
    
      this.behaviorSubject.next(data);
  }

  clearData() {
      this.behaviorSubject.next(0);
  }

  getData(): Observable<any> {
      return this.behaviorSubject.asObservable();
  }
}
