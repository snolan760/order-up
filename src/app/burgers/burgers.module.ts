import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BurgersComponent } from './burgers.component'
import { BurgersRoutingModule } from './burgers-routing.module'
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
	declarations: [BurgersComponent],
	imports: [
		CommonModule,
		IonicModule,
		BurgersRoutingModule,
		ExploreContainerComponentModule
	]
})
export class BurgersModule {}
