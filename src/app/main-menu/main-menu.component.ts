import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-main-menu',
	templateUrl: './main-menu.component.html',
	styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
	title: string
	orders: Array<any> = []

	constructor () {
		this.title = 'Main Menu'
	}

	async ngOnInit () {

	}

}
