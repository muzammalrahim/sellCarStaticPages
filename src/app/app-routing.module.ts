import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTwoPageComponent } from './home-two-page/home-two-page.component';
import { HomeOnePageComponent } from './home-one-page/home-one-page.component';



const routes: Routes = [
  { path: '', component: HomeOnePageComponent },
  { path: 'home2', component: HomeTwoPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {}
