import { Component, OnInit, OnDestroy } from '@angular/core';
import { trainingService } from './training.service';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {
  trainingStarted = false;
  subscription:Subscription;

  constructor(private trainingService: trainingService) { }

  ngOnInit() {
    this.subscription= this.trainingService.trainingStarted.subscribe(isStarted => {
      this.trainingStarted= isStarted;
    });
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
