import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core'

@Component({
	selector: 'app-explore-container',
	templateUrl: './explore-container.component.html',
	styleUrls: ['./explore-container.component.scss']
})
export class ExploreContainerComponent implements OnInit {
	@Input() name: string
	@ViewChild('contentWrapper') content: ElementRef

	constructor () { }

	ngOnInit () {}

}
