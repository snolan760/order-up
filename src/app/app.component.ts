import { Component, EventEmitter, Output } from '@angular/core'
import { CartItemType, UserInterface } from './interfaces/GlobalTypes'

@Component( {
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: [ 'app.component.scss' ]
} )
export class AppComponent {
	@Output() newCartItem = new EventEmitter<CartItemType>()
	public menuItems = [
		{ title: 'Meals', url: '/menu/meals', icon: 'mail' },
		{ title: 'Sides', url: '/menu/sides', icon: 'paper-plane' }
	]
	public user: UserInterface

	constructor() {
	}
}
