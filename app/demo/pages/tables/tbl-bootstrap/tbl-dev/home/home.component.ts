import { Component, OnInit } from '@angular/core';
import { RestFullService } from 'src/app/theme/shared/services/rest-full.service';
import { team } from 'src/app/theme/shared/services/teamClass';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tests: team[];
  error: '';
  succes: '';
  constructor(private restFull: RestFullService) { }

  ngOnInit() {
    this.getTests();

  }
  getTests(): void {
    this.restFull.getData().subscribe(
      res => {
        this.tests = res as team[];
        console.log(res);
      },
      err => { this.error = err; console.log(err); }

    )
  }
}
