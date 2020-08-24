import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {StreamComponent} from './stream/stream.component';
import {AboutComponent} from './about/about.component';
import {BreedsComponent} from './breeds/breeds.component';

const routes: Routes = [{ path: '', component: HomeComponent },
  { path: 'stream', component: StreamComponent },
  { path: 'breeds', component: BreedsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
