import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  todo = new BehaviorSubject(null);
  todo$ = this.todo.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  updateTodo(d: any) {
    this.todo.next (d);
  }

  getEmployeeList() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }


}
