import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { ElevationDirective } from './elevation.directive';
import { SocialIconsComponent } from './social-icons/social-icons.component';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, CommonModule],
  declarations: [LoaderComponent, ElevationDirective, SocialIconsComponent],
  exports: [LoaderComponent, SocialIconsComponent, ElevationDirective],
})
export class SharedModule {}
