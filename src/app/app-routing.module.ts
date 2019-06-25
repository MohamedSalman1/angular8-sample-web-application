import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from  './layouts/main/main.component';
import { HomeComponent } from  './static-pages/home/home.component';
import { AboutUsComponent } from  './static-pages/about-us/about-us.component';
import { AlbumsComponent } from  './artists/albums/albums.component';
import { SongInfoComponent } from  './artists/song-info/song-info.component';
import { SampleReactiveFormComponent } from  './forms/sample-reactive-form/sample-reactive-form.component';
import { SampleTemplateFormComponent } from  './forms/sample-template-form/sample-template-form.component';

const routes: Routes = [
  {
    path:  '',
    component:  MainComponent,
    children: [
      {
        path:  '',
        component:  HomeComponent
      },
      {
        path:  'about-us',
        component: AboutUsComponent
      },
      {
        path:  'albums',
        component: AlbumsComponent
      },
      {
        path:  'song-info',
        component: SongInfoComponent
      },
      {
        path:  'reactive-form',
        component: SampleReactiveFormComponent
      },
      {
        path:  'template-driven-form',
        component: SampleTemplateFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
