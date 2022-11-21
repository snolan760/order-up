import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { CategoryComponent } from './category.component'

describe( 'CategoryComponent', () => {
	let component: CategoryComponent
	let fixture: ComponentFixture<CategoryComponent>

	beforeEach( waitForAsync( () => {
		TestBed.configureTestingModule( {
			declarations: [ CategoryComponent ],
			imports: [ IonicModule.forRoot() ]
		} ).compileComponents()

		fixture = TestBed.createComponent( CategoryComponent )
		component = fixture.componentInstance
		component.category = {
			id: 1,
			name: 'cheeseburger',
			price: 12,
			additions: [{
				id: 1,
				name: 'mustard',
				price: 0.75
			}]
		}
		fixture.detectChanges()
	} ) )

	it( 'should create', () => {
		expect( component ).toBeTruthy()
	} )
} )
