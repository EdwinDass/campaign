import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestCreateComponent } from './test-create/test-create.component';

const routes: Routes = [
  {path: "test", component:TestCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
