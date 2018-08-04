import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { trainingService } from '../training.service';
import { Exercice } from '../exercice.model';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  exercices: Exercice[]= []

  

  constructor(private trainingService: trainingService) { }

  ngOnInit() {
    this.exercices= this.trainingService.getAvailableExercices();
  }

  startTraining(form: NgForm) {
    this.trainingService.startExercice(form.value.selection);
  }

}
