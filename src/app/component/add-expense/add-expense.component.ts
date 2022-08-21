import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from 'src/app/model/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
expense:Expense = new Expense();
id!:number;
  constructor(private _expenseService:ExpenseService,
    private _router:Router,
    private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAndDisplayExpense();
  }

getAndDisplayExpense() {
      const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
      if (isIdPresent) {
       this.id = +this._activatedRoute.snapshot.paramMap.get('id')!;
        this._expenseService.getExpense(this.id).subscribe({
          next: (data) => this.expense = data,
          error: (err) => console.log(err.error.message || err.error),
          complete:()=> console.log("successful")
        });
      }
    }
  saveExpense(){
    if(this.expense.id){
       this.updateExpense(this.id,this.expense);
    }
    else{
    this._expenseService.saveExpense(this.expense).subscribe({
         next:(data)=>{console.log(data);
            this._router.navigateByUrl("/expenses")
        },
          error:(err)=>console.log(err.error.message || err.error),
          complete:()=>console.log("save successful")
        })
      }
  }

  updateExpense(id:number,expense:Expense){
    this._expenseService.update(id,expense).subscribe({
      next:(data)=>console.log(data),
      error:(err)=>console.log(err.error.message||err.error),
      complete:()=>{
        this._router.navigateByUrl("/expenses")
        alert("update successful")
      }
    })
  }

  delete(id:number){
    this._expenseService.deleteExpense(id).subscribe({
      next:(data)=>alert(data),
      error:(err)=>console.log(err.error.message||err.error),
      complete:()=>this._router.navigateByUrl("/expenses") }
    )
}
}
