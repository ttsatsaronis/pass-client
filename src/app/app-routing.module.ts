import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { SearchResultsPageComponent } from './pages/searchResultsPage/search-results-page.component';
import { EventDetailsComponent } from './pages/eventDetails/event-details.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'home',
    redirectTo: '',
    component: HomepageComponent
  },
  {
    path: 'searchresults',
    component: SearchResultsPageComponent
  },
  {
    path: 'eventdetails',
    component: EventDetailsComponent
  },
  {
    path: '**',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
