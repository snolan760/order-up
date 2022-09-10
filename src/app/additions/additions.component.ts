import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { AdditionsType } from '../interfaces/GlobalTypes'
import * as _ from 'lodash'

@Component( {
	selector: 'app-additions',
	templateUrl: './additions.component.html',
	styleUrls: [ './additions.component.scss' ]
} )
export class AdditionsComponent implements OnInit {
	@Input() addition!: AdditionsType
	@Output() addAddition = new EventEmitter<AdditionsType[]>()
	public additions: AdditionsType[] = []

	constructor() {
	}

	ngOnInit() {
	}

	addAdditions(event: CustomEvent, value: any) {
		if(event && value) {
			let removeItem = !(_.get( event, 'detail.checked' ))
			const additionObj = { ...value, removeItem }
			this.addAddition.emit( additionObj )
		}
	}
}
