import { Component, OnInit, Input } from '@angular/core'

@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
	@Input() orders: Array<any> = []

	constructor () { }

	ngOnInit () {}

}
