import { IonicModule } from '@ionic/angular'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MenuComponent } from './menu.component'
import { MenuRoutingModule } from './menu-routing.module'

@NgModule({
	declarations: [MenuComponent],
	imports: [
		CommonModule,
		IonicModule,
		MenuRoutingModule
	]
})
export class MenuModule {}
