import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { GifThumbnailsComponent } from './gif-thumbnails/gif-thumbnails.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [DashboardComponent, GifThumbnailsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class DashboardModule { }
