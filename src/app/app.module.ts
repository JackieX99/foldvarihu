import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MainpageComponent } from './_components/mainpage/mainpage.component';
import { AboutmeComponent } from './_components/aboutme/aboutme.component';
import { ReferencesComponent } from './_components/references/references.component';
import { ConnectsComponent } from './_components/connects/connects.component';
import { AboutmeEnComponent } from './_components/aboutme-en/aboutme-en.component';
import { ConnectsEnComponent } from './_components/connects-en/connects-en.component';
import { MainpageEnComponent } from './_components/mainpage-en/mainpage-en.component';
import { ReferencesEnComponent } from './_components/references-en/references-en.component';
import { NavbarEnComponent } from './_components/navbar-en/navbar-en.component';
import { PagenotfoundComponent } from './_components/pagenotfound/pagenotfound.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FooterComponent } from './_components/footer/footer.component';
import { AuthModule } from './_auth/auth.module';
import { AuthService } from './_auth/auth.service';
import { AuthGuard } from './_auth/auth-guard.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RatingService } from './_services/rating.service';
import { AdminpageComponent } from './_components/adminpage/adminpage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpageComponent,
    AboutmeComponent,
    ReferencesComponent,
    ConnectsComponent,
    AboutmeEnComponent,
    ConnectsEnComponent,
    MainpageEnComponent,
    ReferencesEnComponent,
    NavbarEnComponent,
    PagenotfoundComponent,
    FooterComponent,
    AdminpageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FontAwesomeModule,
    MDBBootstrapModule.forRoot(),
    AuthModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, RatingService],
  bootstrap: [AppComponent],
  exports: [BsDropdownModule, TooltipModule, ModalModule]
})
export class AppModule { }

