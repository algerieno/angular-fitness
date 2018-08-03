import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { StopTrainingDialogComponent } from './stop-training-dialog/stop-training-dialog.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  @Output() exitTraining = new EventEmitter<void>();

  progress = 0;
  timer;
  timeRunning= false;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    this.timeRunning=true;
    this.timer = setInterval(() => {
      this.progress ++;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 100)
  }

  pauseTimer() {
    if(this.timeRunning){
      clearInterval(this.timer);
      this.timeRunning=false;
    }else{
      this.startOrResumeTimer();
    }

  }

  stopTimer() {
    this.timeRunning=false;
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingDialogComponent, {
      data: {
        currentProgress: this.progress
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.exitTraining.emit();
      } else {
        this.startOrResumeTimer();
      }
    })
  }

}
