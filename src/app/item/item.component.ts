import { Component, OnInit, Input } from '@angular/core'
import { MealType } from '../interfaces/GlobalTypes'

@Component( {
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: [ './item.component.scss' ]
} )
export class ItemComponent implements OnInit {
	@Input() item!: MealType

	constructor() {
	}

	ngOnInit() {
	}
}
