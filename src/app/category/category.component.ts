import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { AdditionsType, CategoryType } from '../interfaces/GlobalTypes'
import * as _ from 'lodash'
import { CartService } from '../cart.service'

@Component( {
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: [ './category.component.scss' ]
} )
export class CategoryComponent implements OnInit {
	@Input() category: CategoryType
	@Output() addToCart = new EventEmitter<CategoryType>()
	public additions: AdditionsType[] = []

	constructor(
		private cartService: CartService
	) {
	}

	ngOnInit() {
	}

	addAdditions(additions: any) {
		if (additions.removeItem) {
			_.remove( this.additions, { name: additions.name } )
		} else {
			this.additions.push( {
				id: additions.id,
				name: additions.name,
				price: additions.price
			} )
		}
	}

	addToCategory(category: any) {
		const clonedCategory = _.cloneDeep( category )
		clonedCategory.additions = this.additions
		clonedCategory.price = clonedCategory.price + this.addCategoryAdditionPrices(clonedCategory)
		console.log('clonedCategory', clonedCategory)
		// @todo: use this:
		this.cartService.updateItems( clonedCategory )
	}

	addCategoryAdditionPrices(category: any) {
		let total = 0
		if(category.additions.length) {
			_.forEach(category.additions, res => {
				total = total + res.price
			})
		}
		return total
	}
}
