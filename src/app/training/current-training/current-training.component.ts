import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { StopTrainingDialogComponent } from './stop-training-dialog/stop-training-dialog.component';
import { trainingService } from '../training.service';
import { Exercice } from '../exercice.model';


@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {


  progress = 0;
  timer;
  timeRunning= false;
  exercice:Exercice;
  

  constructor(private dialog: MatDialog, private trainingService: trainingService) { }

  ngOnInit() {
    this.exercice=this.trainingService.getSelectedExercice();
    this.startOrResumeTimer();
  }


  startOrResumeTimer() {
    const step = this.exercice.duration * 10;
    this.timeRunning=true;
    this.timer = setInterval(() => {
      this.progress ++;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, step)
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
        this.trainingService.cancelExercice(this.progress);
      } else {
        this.startOrResumeTimer();
      }
    })
  }

  completeExercice() {
    this.trainingService.completeExercice();
  }
}
