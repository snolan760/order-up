import { IonicModule } from '@ionic/angular'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MainMenuComponent } from './main-menu.component'
import { MainMenuRoutingModule } from './main-menu-routing.module'
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module'
import { OrderModule } from '../order/order.module'

@NgModule({
	declarations: [MainMenuComponent],
	imports: [
		CommonModule,
		IonicModule,
		ExploreContainerComponentModule,
		MainMenuRoutingModule,
		OrderModule
	]
})
export class MainMenuModule {}
