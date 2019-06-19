import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        RouterModule.forChild([
            { path: 'auth', component: AuthComponent }
        ]),
        CommonModule, 
        FormsModule,
        SharedModule
    ]

})
export class AuthModule {

}