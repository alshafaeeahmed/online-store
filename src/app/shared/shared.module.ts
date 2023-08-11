import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './select/select.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ErrorComponent, SpinnerComponent, SelectComponent, ItemComponent],
  imports: [CommonModule, RouterModule,HttpClientModule],
  exports: [HeaderComponent,FooterComponent,ErrorComponent,SpinnerComponent,SelectComponent,ItemComponent],
})
export class SharedModule {}
