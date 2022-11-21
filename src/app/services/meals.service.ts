import { Injectable } from '@angular/core'
import { meals } from '../stubs/meals'

@Injectable( {
	providedIn: 'root'
} )
export class MealsService {
	constructor() {
	}

	getMeals() {
		return meals
	}
}
