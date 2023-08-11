import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ErrorComponent, SpinnerComponent],
  imports: [CommonModule, RouterModule,HttpClientModule],
  exports: [HeaderComponent,FooterComponent,ErrorComponent,SpinnerComponent],
})
export class SharedModule {}
