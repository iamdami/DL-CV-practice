import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'detection',
    loadChildren: () => import('./detection/detection.module').then( m => m.DetectionPageModule)
  },
  {
    path: 'expression',
    loadChildren: () => import('./expression/expression.module').then( m => m.ExpressionPageModule)
  },
  {
    path: 'recognition',
    loadChildren: () => import('./recognition/recognition.module').then( m => m.RecognitionPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
