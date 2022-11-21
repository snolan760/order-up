import { Injectable } from '@angular/core'
import { CartItemType } from './interfaces/GlobalTypes'

@Injectable( {
	providedIn: 'root'
} )
export class CartService {
	cartItems: CartItemType[] = []

	constructor() {
	}

	updateItems(item: any) {
		console.log('cart service item: ', item)
		this.cartItems.push(item)
	}

	getItems() {
		return this.cartItems
	}
}
