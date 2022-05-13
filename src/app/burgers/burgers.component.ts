import { Component, OnInit } from '@angular/core'
import { OrderService } from '../order.service'

@Component({
	selector: 'app-burgers',
	templateUrl: './burgers.component.html',
	styleUrls: ['./burgers.component.scss']
})
export class BurgersComponent implements OnInit {
	orders: Array<any> = []

	constructor (public orderService: OrderService) {}

	async ngOnInit() {
		this.orders = await this.getOrders()
	}

	async checkOrders() {
		this.orders = await this.getOrders()
	}

	async getOrders() {
		const orders = await this.orderService.getOrder()
		console.log('orders', orders)
		// const order = sessionStorage.getItem('order')
		// console.log('order', order)
		return orders
	}

	async setOrder (order: any) {
		const newOrders = await this.orderService.setOrder(order)
		console.log('newOrders', newOrders)
		sessionStorage.setItem('orders', newOrders)
	}

}
