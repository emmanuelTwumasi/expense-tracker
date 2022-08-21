import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpenseComponent } from './component/add-expense/add-expense.component';
import { ListExpenseComponent } from './component/list-expense/list-expense.component';

const routes: Routes = [
  {path:'expenses',component:ListExpenseComponent},
  {path:'addexpense', component: AddExpenseComponent},
  {path:'editexpense/:id', component:AddExpenseComponent},
  {path:'',  redirectTo:  '/expenses' ,    pathMatch:  'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
