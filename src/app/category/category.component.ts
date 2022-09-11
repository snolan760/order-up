import { Component, OnInit, Input } from '@angular/core'
import { NgForm } from '@angular/forms'
import { AdditionsType, CategoryType } from '../interfaces/GlobalTypes'
import * as _ from 'lodash'
import { CartService } from '../services/cart.service'

@Component( {
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: [ './category.component.scss' ]
} )
export class CategoryComponent implements OnInit {
	@Input() category: CategoryType
	public additions: AdditionsType[] = []
	public cat: CategoryType
	public addedToCart: boolean = false

	constructor(
		private cartService: CartService
	) {
	}

	ngOnInit() {
		this.cat = _.cloneDeep( this.category )
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
		const clonedAdditions = _.cloneDeep( this.additions )
		const clonedCategory = { ...category, additions: clonedAdditions }
		clonedCategory.price = clonedCategory.price + this.addCategoryAdditionPrices( clonedCategory )
		this.cartService.addItem( clonedCategory )
		this.addedToCart = true
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

	onSubmit(f: NgForm) {
		console.log('form f: ', f)
		// console.log( f.value )
		// console.log( f.valid )
	}
}
