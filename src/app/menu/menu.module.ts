import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuPage } from './menu.page';
import { SidesPageModule } from "../sides/sides.module";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		MenuRoutingModule,
		SidesPageModule
	],
	declarations: [MenuPage]
})
export class MenuModule {
}
