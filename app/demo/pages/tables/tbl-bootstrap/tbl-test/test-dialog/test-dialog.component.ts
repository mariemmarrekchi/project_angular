import { Observable } from 'rxjs/Rx';
import { Component, Inject, OnInit, Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { ISubscription } from 'rxjs/Subscription';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.scss']
})
export class TestDialogComponent implements OnInit, OnDestroy {
  
  counter = 0;
  private timer$: TimerObservable<any>;
  private $timer: ISubscription;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }
  
  ngOnInit() {
    this.startChrono();
  }

  startChrono() {
    this.timer$ = TimerObservable.create(0, 1000);//or you can use the constructor method
    this.$timer = this.timer$.subscribe(t => {
      this.counter = t;
    });    
  }

  ngOnDestroy(): void {    
    this.$timer.unsubscribe();    
    console.log(this.counter + " Seconds");
  }
}

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return ('00' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
  }

}
