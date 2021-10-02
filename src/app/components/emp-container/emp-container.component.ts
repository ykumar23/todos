import { Component, OnInit } from '@angular/core';
import { EmpService } from 'src/app/services/emp.service';

@Component({
  selector: 'yk-emp-container',
  templateUrl: './emp-container.component.html',
  styleUrls: ['./emp-container.component.scss']
})
export class EmpContainerComponent implements OnInit {

  todosList: any;

  constructor(
    private empService: EmpService
  ) {
    this.setupSubscriptions();
  }

  ngOnInit(): void {
  }

  setupSubscriptions() {
    this.empService.getEmployeeList().subscribe (d => {
      console.log ('data ', d);
      this.todosList = d;
    });
  }
  
}
