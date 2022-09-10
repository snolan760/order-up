import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { ItemComponent } from './item.component'

describe( 'ItemComponent', () => {
	let component: ItemComponent
	let fixture: ComponentFixture<ItemComponent>

	beforeEach( waitForAsync( () => {
		TestBed.configureTestingModule( {
			declarations: [ ItemComponent ],
			imports: [ IonicModule.forRoot() ]
		} ).compileComponents()

		fixture = TestBed.createComponent( ItemComponent )
		component = fixture.componentInstance
		component.item = {
			id: 1,
			name: 'burgers',
			categories: [{
				id: 1,
				name: 'cheeseburger',
				price: 12
			}]
		}
		fixture.detectChanges()
	} ) )

	it( 'should create', () => {
		expect( component ).toBeTruthy()
	} )
} )
