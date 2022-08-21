import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddExpenseComponent } from './component/add-expense/add-expense.component';
import { ListExpenseComponent } from './component/list-expense/list-expense.component';

const routers:Routes=[
  {path:'expenses',component:ListExpenseComponent},
  {path:'addexpense',component:AddExpenseComponent},
  {path:'editexpense/:id', component:AddExpenseComponent},
  {path:'',  redirectTo:  '/expenses' ,    pathMatch:  'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ListExpenseComponent,
    AddExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
