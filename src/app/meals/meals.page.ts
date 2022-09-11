import { Component, OnInit } from '@angular/core'
import { MealsService } from '../services/meals.service'
import { CommonModule } from '@angular/common'
import { MealType } from '../interfaces/GlobalTypes'
import * as _ from 'lodash'

@Component( {
	selector: 'app-meals',
	templateUrl: './meals.page.html',
	styleUrls: [ './meals.page.scss' ],
	imports: [ CommonModule ]
} )
export class MealsPage implements OnInit {
	public meals: MealType[]
	public filterValue = ''

	constructor(
		private mealServices: MealsService
	) {
	}

	ngOnInit() {
		this.getMeals()
	}

	getMeals() {
		this.meals = this.mealServices.getMeals()
	}

	filterResults(event: any) {
		const eventValue = event.detail.value
		const filteredResults = _.filter( this.meals, { name: eventValue })
		console.log( 'filteredResults', filteredResults )
		this.meals = filteredResults
	}
}
