import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarSecComponent } from './nav-bar-sec/nav-bar-sec.component';
import { FindCarSecComponent } from './find-car-sec/find-car-sec.component';
import { WelcomeSecComponent } from './welcome-sec/welcome-sec.component';
import { WhyUsSecComponent } from './why-us-sec/why-us-sec.component';
import { ReviewsSecComponent } from './reviews-sec/reviews-sec.component';
import { BuyOnlineComponent } from './buy-online/buy-online.component';


// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderSecComponent } from './slider-sec/slider-sec.component';
import { HelpSecComponent } from './help-sec/help-sec.component';
import { SellingSecComponent } from './selling-sec/selling-sec.component';
import { FaqSecComponent } from './faq-sec/faq-sec.component';
import { FooterSecComponent } from './footer-sec/footer-sec.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeTwoPageComponent } from './home-two-page/home-two-page.component';
import { HomeOnePageComponent } from './home-one-page/home-one-page.component';
import { BookNowSecComponent } from './book-now-sec/book-now-sec.component';
import { NavBarWithoutComponent } from './nav-bar-without/nav-bar-without.component';
import { LevelUpSecComponent } from './level-up-sec/level-up-sec.component';
import { SellYourCarComponent } from './sell-your-car/sell-your-car.component';
import { AboutUsSecComponent } from './about-us-sec/about-us-sec.component';
import { WhyOurCarSecComponent } from './why-our-car-sec/why-our-car-sec.component';
import { WorldLargestSecComponent } from './world-largest-sec/world-largest-sec.component';
import { CarTwoSecComponent } from './car-two-sec/car-two-sec.component';
import { FaqForPageTwoComponent } from './faq-for-page-two/faq-for-page-two.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarSecComponent,
    FindCarSecComponent,
    WelcomeSecComponent,
    WhyUsSecComponent,
    ReviewsSecComponent,
    BuyOnlineComponent,
    SliderSecComponent,
    HelpSecComponent,
    SellingSecComponent,
    FaqSecComponent,
    FooterSecComponent,
    HomeTwoPageComponent,
    HomeOnePageComponent,
    BookNowSecComponent,
    NavBarWithoutComponent,
    LevelUpSecComponent,
    SellYourCarComponent,
    AboutUsSecComponent,
    WhyOurCarSecComponent,
    WorldLargestSecComponent,
    CarTwoSecComponent,
    FaqForPageTwoComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
