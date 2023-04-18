import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { FormsModule } from '@angular/forms';
import { AdministratorComponent } from './administrator/administrator.component';

const appRoutes:Routes=[

  {path:"", component:LogInComponent},
  {path:"sign-up", component:SignUpComponent},
  {path:"terms-and-conditions", component:TermsAndConditionsComponent},
  {path:"administrator", component:AdministratorComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    TermsAndConditionsComponent,
    AdministratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // Sirve para enrutar las paginas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
