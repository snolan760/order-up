import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { MealsPageRoutingModule } from './meals-routing.module'
import { MealsPage } from './meals.page'
import { ItemComponent } from '../item/item.component'
import { CategoryComponent } from '../category/category.component'

@NgModule( {
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		MealsPageRoutingModule
	],
	exports: [
		CategoryComponent
	],
	declarations: [ MealsPage, ItemComponent, CategoryComponent ]
} )
export class MealsPageModule {
}
