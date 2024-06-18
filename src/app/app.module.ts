import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { SectionsComponent } from './components/sections/sections.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { NewsComponent } from './components/news/news.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { OnlineLaboratoryComponent } from './components/online-laboratory/online-laboratory.component';
import { ContactComponent } from './components/contact/contact.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { WhHeaderComponent } from './shared/wh-header/wh-header.component';
import { DividerModule } from 'primeng/divider';
import { CarouselModule } from 'primeng/carousel';
import { SectionsCarouselComponent } from './components/carousels/sections-carousel/sections-carousel.component';
import { DoctorsCarouselComponent } from './components/carousels/doctors-carousel/doctors-carousel.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TestimonialsCarouselComponent } from './components/carousels/testimonials-carousel/testimonials-carousel.component';
import { AnnouncementCarouselComponent } from './components/carousels/announcement-carousel/announcement-carousel.component';
import { AnnouncementDialogComponent } from './components/dialogs/announcement-dialog/announcement-dialog.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SectionsComponent,
    DoctorsComponent,
    NewsComponent,
    GalleryComponent,
    OnlineLaboratoryComponent,
    ContactComponent,
    SidebarComponent,
    WhHeaderComponent,
    SectionsCarouselComponent,
    DoctorsCarouselComponent,
    TestimonialsCarouselComponent,
    AnnouncementCarouselComponent,
    AnnouncementDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    IconFieldModule,
    InputIconModule,
    InputGroupModule,
    InputGroupAddonModule,
    DividerModule,
    CarouselModule,
    CardModule,
    ButtonModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
