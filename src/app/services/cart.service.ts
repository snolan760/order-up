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
		if(!this.cartItems) this.cartItems = []
		this.cartItems.push({ orderId: v4(), ...item })
		localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
	}

	getItems() {
		this.cartItems = JSON.parse( localStorage.getItem( 'cartItems' ) )
		return this.cartItems || []
	}

	removeItem(item: any) {
		_.remove(this.cartItems, { orderId: item.orderId})
		localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
		return this.cartItems
	}
}
