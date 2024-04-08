import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { SidebarComponent } from '../../component/sidebar/sidebar.component';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { FooterComponent } from '../../component/footer/footer.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule
  ]
})
export class AdminLayoutModule { }
