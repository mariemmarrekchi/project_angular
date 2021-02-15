import { Component, OnInit } from '@angular/core';
import { RestFullService } from 'src/app/theme/shared/services/rest-full.service';
import { tabletest } from 'src/app/theme/shared/services/TableClass';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  table:tabletest[] = new Array<tabletest>();

  error:'';
  constructor(private restFull : RestFullService) { }

  ngOnInit() {
   this. getData()
  }
getData():void{

  this.restFull.getDataTst().subscribe(
    res => {
      this.table = res as tabletest[];
      console.log(res);
    },
    err => { this.error = err; console.log(err); }

  )
}
}
