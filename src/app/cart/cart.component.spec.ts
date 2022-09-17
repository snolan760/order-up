import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { CartComponent } from './cart.component'

describe( 'CartComponent', () => {
	let component: CartComponent
	let fixture: ComponentFixture<CartComponent>

	beforeEach( waitForAsync( () => {
		TestBed.configureTestingModule( {
			declarations: [ CartComponent ],
			imports: [ IonicModule.forRoot() ]
		} ).compileComponents()

		fixture = TestBed.createComponent( CartComponent )
		component = fixture.componentInstance
		component.cartItems = [{
			id: 1,
			name: 'burger',
			price: 12,
			additions: [{
				id: 1,
				name: 'mustard',
				price: .75
			}]
		}]
		fixture.detectChanges()
	} ) )

	it( 'should create', () => {
		expect( component ).toBeTruthy()
	} )
} )
