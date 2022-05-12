import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	parentPage: any

	constructor (
		public router: Router,
		private activatedRoute: ActivatedRoute
	) {
		// console.log('this.activatedRoute.children.length', this.activatedRoute.children.length)
	}

	goToMenu () {
		this.router.navigate(['/'])
	}

	ngOnInit () {
		// console.log('we here')
	}

}
