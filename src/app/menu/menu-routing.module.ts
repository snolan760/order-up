import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MenuComponent } from './menu.component'

const routes: Routes = [
	{
		path: '',
		component: MenuComponent,
		children: [
			{
				path: 'main',
				loadChildren: () => import('../main-menu/main-menu.module').then(m => m.MainMenuModule)
			},
			{
				path: 'burgers',
				loadChildren: () => import('../burgers/burgers.module').then(m => m.BurgersModule)
			},
			{
				path: '',
				redirectTo: '/menu/main',
				pathMatch: 'full'
			}
		]
	},
	{
		path: '',
		redirectTo: '/menu/main',
		pathMatch: 'full'
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)]
})
export class MenuRoutingModule {}
