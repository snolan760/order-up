import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
	},
	{
		path: 'menu',
		loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
	}
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
