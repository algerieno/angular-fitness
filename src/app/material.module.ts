import { NgModule } from "../../node_modules/@angular/core";
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatIconModule],
    exports: [MatButtonModule, MatIconModule]
})
export class materialModule {}