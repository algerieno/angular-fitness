import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { trainingService } from '../training.service';
import { MatTableDataSource, MatSort, MatPaginator } from '../../../../node_modules/@angular/material';
import { Exercice } from '../exercice.model';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit, AfterContentInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource= new MatTableDataSource<Exercice>();
  displayColumns= ['date', 'name', 'duration', 'calories', 'state'];

  constructor(private trainingService: trainingService) { }

  ngOnInit() {
    this.dataSource.data= this.trainingService.getAllExercices();
  }

  ngAfterContentInit() {
    this.dataSource.sort= this.sort;
    this.dataSource.paginator= this.paginator;
  }

  filterResult(text: string) {
    this.dataSource.filter= text.trim().toLowerCase();
  }

}
