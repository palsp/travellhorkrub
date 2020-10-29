import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'temple',
    loadChildren: () => import('./pages/temple/temple.module').then( m => m.TemplePageModule)
  },
  {
    path: 'dep',
    loadChildren: () => import('./pages/dep/dep.module').then( m => m.DepPageModule)
  },
  {
    path: 'res',
    loadChildren: () => import('./pages/res/res.module').then( m => m.ResPageModule)
  },

  {
    path: 'club',
    loadChildren: () => import('./pages/club/club.module').then( m => m.ClubPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'diaries',
    loadChildren: () => import('./pages/diaries/diaries.module').then( m => m.DiariesPageModule)
  },
  {
    path: 'diaryhome',
    loadChildren: () => import('./pages/diaryhome/diaryhome.module').then( m => m.DiaryhomePageModule)
  },
  {
    path: 'showdiary',
    loadChildren: () => import('./pages/showdiary/showdiary.module').then( m => m.ShowdiaryPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
