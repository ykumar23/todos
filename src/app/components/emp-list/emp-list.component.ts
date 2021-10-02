import { Component, Input, OnInit } from '@angular/core';
import { EmpService } from 'src/app/services/emp.service';

@Component({
  selector: 'yk-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {

  @Input() todos: any;

  constructor(
    private empService: EmpService
  ) { }

  ngOnInit(): void {
  }

  onclicked(e: any) {
    this.empService.updateTodo (e);
  }
}
