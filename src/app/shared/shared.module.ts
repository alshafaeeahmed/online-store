import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ErrorComponent],
  imports: [CommonModule, RouterModule,HttpClientModule],
  exports: [HeaderComponent,FooterComponent],
})
export class SharedModule {}
