import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component( {
	selector: 'app-menu',
	templateUrl: './menu.page.html',
	styleUrls: [ './menu.page.scss' ]
} )
export class MenuPage implements OnInit {
	public menu: string

	constructor(private activatedRoute: ActivatedRoute) {
	}

	ngOnInit() {
		// console.log( 'this.activatedRoute.snapshot', this.activatedRoute.snapshot )
		this.menu = this.activatedRoute.snapshot.paramMap.get( 'id' )
	}
}
