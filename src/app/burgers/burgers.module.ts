import { IonicModule } from '@ionic/angular'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BurgersComponent } from './burgers.component'
import { BurgersRoutingModule } from './burgers-routing.module'
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module'
import { OrderModule } from '../order/order.module'

@NgModule({
	declarations: [BurgersComponent],
	imports: [
		CommonModule,
		IonicModule,
		BurgersRoutingModule,
		ExploreContainerComponentModule,
		OrderModule
	]
})
export class BurgersModule {}
