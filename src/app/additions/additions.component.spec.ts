import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'
import { AdditionsComponent } from './additions.component'

describe( 'AdditionsComponent', () => {
	let component: AdditionsComponent
	let fixture: ComponentFixture<AdditionsComponent>

	beforeEach( waitForAsync( () => {
		TestBed.configureTestingModule( {
			declarations: [ AdditionsComponent ],
			imports: [ IonicModule.forRoot() ]
		} ).compileComponents()

		fixture = TestBed.createComponent( AdditionsComponent )
		component = fixture.componentInstance
		component.addition = {
			id: 1,
			name: 'hello world',
			price: 1
		}
		fixture.detectChanges()
	} ) )

	it( 'should create', () => {
		expect( component ).toBeTruthy()
	} )
} )
