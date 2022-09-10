import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { MealsService } from '../services/meals.service'
import { CommonModule } from '@angular/common'
import { CartItemType, MealType } from '../interfaces/GlobalTypes'

@Component( {
	selector: 'app-meals',
	templateUrl: './meals.page.html',
	styleUrls: [ './meals.page.scss' ],
	imports: [ CommonModule ]
} )
export class MealsPage implements OnInit {
	@Output() cartItems = new EventEmitter<CartItemType>()
	@Output() newCartItem = new EventEmitter<CartItemType>()
	public meals: MealType[]

	constructor(
		private mealServices: MealsService
	) {
	}

	ngOnInit() {
		this.meals = this.getMeals()
	}

	getMeals() {
		return this.mealServices.getMeals()
	}
}
