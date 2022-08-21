import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/model/expense';
import { Filters } from 'src/app/model/filters';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent implements OnInit {

  expenses:Array<Expense>= new Array;
filters:Filters = new Filters();

  constructor(private expenseService:ExpenseService) { }

  ngOnInit(): void {
    this.getExpenses();
  }

getExpenses() {
    this.expenseService.getExpenses().subscribe({
      next: (data) => this.expenses = this.filterExpense(data),
      error: (err) =>  alert(err.error.message||err.error),
      complete: () => console.log("Success: these are all expenses available.")
    });
  }

filterExpense(expense:Expense[]):Expense[]{
    return expense.filter((e)=>e.expense.toLowerCase().includes(this.filters.keyword.toLowerCase()))
}
}
