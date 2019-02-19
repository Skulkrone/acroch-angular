import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AnnouncementListComponent } from './announcement-list/announcement-list.component';
import { SingleAdComponent } from './announcement-list/single-ad/single-ad.component';
import { AdFormComponent } from './announcement-list/ad-form/ad-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { AnnouncementsService } from './services/announcements.service';
import { AuthGuardService } from './services/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'announcements', canActivate: [AuthGuardService], component: AnnouncementListComponent },
  { path: 'announcements/new', canActivate: [AuthGuardService], component: AdFormComponent },
  { path: 'announcements/view/:id', canActivate: [AuthGuardService], component: SingleAdComponent },
  { path: '', redirectTo: 'announcements', pathMatch: 'full' },
  { path: '**', redirectTo: 'announcements' }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    AnnouncementListComponent,
    SingleAdComponent,
    AdFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AnnouncementsService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
