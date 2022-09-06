import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'translator', loadChildren: () => import('@reactive-forms/translation').then(m => m.TranslationModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: false, // <-- debugging purposes only
        scrollOffset: [ 0, 0 ],
        // initialNavigation: 'enabled',
        onSameUrlNavigation: 'reload',
        scrollPositionRestoration: 'enabled',
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }