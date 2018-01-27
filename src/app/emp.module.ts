import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEmpResComponent} from './all-emp-res/all-emp-res.component';

const routes: Routes = [
  { path: '', component: AllEmpResComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class empModule {}
