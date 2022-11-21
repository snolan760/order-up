import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SidesPageRoutingModule } from './sides-routing.module';
import { SidesPage } from './sides.page';
@NgModule( {
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		SidesPageRoutingModule
	],
	declarations: [ SidesPage ]
} )
export class SidesPageModule {
}
