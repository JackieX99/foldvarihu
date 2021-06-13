import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './_auth/signin/signin.component';
import { SignupComponent } from './_auth/signup/signup.component';
import { AboutmeEnComponent } from './_components/aboutme-en/aboutme-en.component';
import { AboutmeComponent } from './_components/aboutme/aboutme.component';
import { AdminpageComponent } from './_components/adminpage/adminpage.component';
import { ConnectsEnComponent } from './_components/connects-en/connects-en.component';
import { ConnectsComponent } from './_components/connects/connects.component';
import { MainpageEnComponent } from './_components/mainpage-en/mainpage-en.component';
import { MainpageComponent } from './_components/mainpage/mainpage.component';
import { PagenotfoundComponent } from './_components/pagenotfound/pagenotfound.component';
import { ReferencesEnComponent } from './_components/references-en/references-en.component';
import { ReferencesComponent } from './_components/references/references.component';


const routes: Routes = [
  { path: 'mainpage/hu', component: MainpageComponent },
  { path: 'mainpage/en', component: MainpageEnComponent },
  { path: 'aboutme/hu', component: AboutmeComponent },
  { path: 'aboutme/en', component: AboutmeEnComponent},
  { path: 'references/hu', component: ReferencesComponent},
  { path: 'references/en', component: ReferencesEnComponent},
  { path: 'contacts/hu', component: ConnectsComponent},
  { path: 'contacts/en', component: ConnectsEnComponent},
  { path: 'dashboard', component: AdminpageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: '', redirectTo: '/mainpage/hu', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
