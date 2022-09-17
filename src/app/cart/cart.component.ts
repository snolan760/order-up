import { Component, OnInit } from '@angular/core'
import { CartItemType } from '../interfaces/GlobalTypes'
import * as _ from 'lodash'
import { CartService } from '../services/cart.service'

@Component( {
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: [ './cart.component.scss' ]
} )
export class CartComponent implements OnInit {
	public cartItems: CartItemType[] = []
	public total: number = 0

	constructor(
		private cartService: CartService
	) {
	}

	ngOnInit() {
		this.cartItems = this.cartService.getItems()
	}

	additionsList(additions: any) {
		const clonedAdditions = _.cloneDeep( additions )
		const tempAdditions = _.map( clonedAdditions, res => res.name )
		return tempAdditions.join( ', ' )
	}

	getTotal() {
		let total = 0
		if (this.cartItems.length) {
			_.forEach( this.cartItems, res => {
				total = total + res.price
			} )
		}
		return total
	}

	removeItem(item: any) {
		const clonedItem = _.cloneDeep( item )
		return this.cartService.removeItem( clonedItem )
	}

}
