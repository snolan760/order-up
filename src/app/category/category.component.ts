import { Component, OnInit, Input } from '@angular/core'
import { AdditionsType, CategoryType } from '../interfaces/GlobalTypes'
import * as _ from 'lodash'
import { CartService } from '../services/cart.service'

interface FormType {
	additions: AdditionsType[]
}

@Component( {
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: [ './category.component.scss' ]
} )
export class CategoryComponent implements OnInit {
	@Input() category: CategoryType
	public additions: AdditionsType[] = []
	public form: FormType = {
		additions: []
	}

	constructor(
		private cartService: CartService
	) {
	}

	ngOnInit() {
	}

	addAdditions(event: CustomEvent, value: any) {
		if (event && value) {
			let removeItem = !(_.get( event, 'detail.checked' ))
			const additionObj = { ...value, removeItem }
			if (additionObj.removeItem) {
				_.remove( this.additions, { name: additionObj.name } )
			} else {
				this.additions.push( {
					id: additionObj.id,
					name: additionObj.name,
					price: additionObj.price
				} )
			}
		}
	}

	addToCart(category: any) {
		const clonedAdditions = _.cloneDeep( this.additions )
		const clonedCategory = { ...category, additions: clonedAdditions }
		clonedCategory.price = clonedCategory.price + this.addCategoryAdditionPrices( clonedCategory )
		this.cartService.addItem( clonedCategory )
	}

	addCategoryAdditionPrices(category: any) {
		let total = 0
		if (category.additions.length) {
			_.forEach( category.additions, res => {
				total = total + res.price
			} )
		}
		return total
	}
}
