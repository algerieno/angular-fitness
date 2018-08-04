import { Exercice } from "./exercice.model";
import { Subject } from "../../../node_modules/rxjs";

export class trainingService {

    private selectedExercice: Exercice;

    trainingStarted= new Subject<boolean>();

    private availableExercices: Exercice[]= [
        {id: 'crunches', name: 'Crunches', duration: 30, calories: 8},
        {id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15},
        {id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18},
        {id: 'squats', name: 'Squats', duration: 60, calories: 8}        
    ]

    private exercices: Exercice[]= [];

    getAvailableExercices() {
        return this.availableExercices;
    }

    startExercice(selectedID) {
        this.selectedExercice= this.availableExercices.find(ex => ex.id === selectedID);
        this.trainingStarted.next(true);
    }

    stopExercice() {
        this.selectedExercice= null;
        this.trainingStarted.next(false);
    }

    completeExercice() {
        this.exercices.push({
            ...this.selectedExercice,
            date: new Date(),
            state: 'completed'
        });
        this.selectedExercice= null;
        this.trainingStarted.next(false);
    }

    cancelExercice(progress: number) {
        this.exercices.push({
            ...this.selectedExercice,
            duration: this.selectedExercice.duration * progress / 100,
            calories: this.selectedExercice.duration * progress / 100,
            date: new Date(),
            state: 'completed'
        });
        this.selectedExercice= null;
        this.trainingStarted.next(false);
    }

    getSelectedExercice() {
        return { ...this.selectedExercice};
    }



}