import { Component, OnInit, Input } from '@angular/core'
import { CartItemType } from '../interfaces/GlobalTypes'
import * as _ from 'lodash'

@Component( {
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: [ './cart.component.scss' ]
} )
export class CartComponent implements OnInit {
	@Input() cartItems!: CartItemType[]
	public total: number = 0

	constructor() {
	}

	ngOnInit() {
	}

	additionsList(additions: any) {
		const tempAdditions = _.map( additions, res => res.name )
		return tempAdditions.join( ', ' )
	}

	getTotal() {
		let total = 0
		if(this.cartItems.length) {
			_.forEach(this.cartItems, res => {
				total = total + res.price
			})
		}
		return total
	}

}
