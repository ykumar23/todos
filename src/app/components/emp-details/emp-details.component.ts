import { Component, OnInit } from '@angular/core';
import { EmpService } from 'src/app/services/emp.service';

@Component({
  selector: 'yk-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss']
})
export class EmpDetailsComponent implements OnInit {

  todo: any;

  constructor(
    private empService: EmpService
  ) {
    this.setupSubscription();
  }

  setupSubscription() {
    this.empService.todo$.subscribe (data => {
      this.todo = data;
    });
  }

  ngOnInit(): void {
    
  }

}
