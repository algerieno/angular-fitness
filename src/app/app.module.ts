import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { materialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { appRoutingModule } from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '../../node_modules/@angular/forms';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { StopTrainingDialogComponent } from './training/current-training/stop-training-dialog/stop-training-dialog.component';
import { authService } from './auth/authService.service';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    PastTrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavComponent,
    StopTrainingDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    materialModule,
    appRoutingModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [authService],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingDialogComponent]
})
export class AppModule { }
