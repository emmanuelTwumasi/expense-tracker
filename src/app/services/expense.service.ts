import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Expense } from '../model/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private url:string="http://localhost:8080/api/v1/expenses/";
  constructor(private http:HttpClient) { }

  getExpenses():Observable<Expense[]>{
    return this.http.get<Expense[]>(this.url).pipe(
      map(response=>response)
    );
  }

  saveExpense(expense:Expense):Observable<Expense>{
    return this.http.post<Expense>(`${this.url}expense`, expense);
  }

  getExpense(id:number):Observable<Expense>{
    return this.http.get<Expense>(`${this.url}${id}`).pipe(
      map(response=>response)
    )
  }
  update(id: any, expense: Expense) {
 return this.http.put<Expense>(`${this.url}update?id=${id}`,expense).pipe(
   map(response=>response)
 );
  }
  deleteExpense(id:number):Observable<String>{
    return this.http.delete<String>(`${this.url}${id}`).pipe(
      map(response=>response)
    )
  }
}
