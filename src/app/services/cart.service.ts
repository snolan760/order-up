import { Injectable } from '@angular/core'
import { CartItemType } from '../interfaces/GlobalTypes'
import * as _ from 'lodash'
import { v4 } from 'uuid'

@Injectable( {
	providedIn: 'root'
} )
export class CartService {
	cartItems: CartItemType[] = []

	constructor() {
	}

	addItem(item: any) {
		this.cartItems.push({ orderId: v4(), ...item })
	}

	getItems() {
		return this.cartItems
	}

	removeItem(item: any) {
		_.remove(this.cartItems, { orderId: item.orderId})
		return this.cartItems
	}
}
