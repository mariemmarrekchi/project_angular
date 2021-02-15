import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';

import { TestDialogComponent } from '../test-dialog/test-dialog.component';

@Component({
  selector: 'app-one-requirment',
  templateUrl: './one-requirment.component.html',
  styleUrls: ['./one-requirment.component.scss']
})
export class OneRequirmentComponent implements OnInit {

  @Input() name:string;
  @Input() description:string;

  @ViewChild('exampleModalLong', {static: false}) child : any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  closeConfirm(){
    this.child.hide();    
  }

  confirm(){}

  testStart(name,description) : void{    
    this.child.hide();
    const dialogRef = this.dialog.open(TestDialogComponent, {
      width: '950px',
      /*height: '700px',   */
      disableClose:true,
      data: {name: name, description: description}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      /* this.animal = result; */
    });
  }

}
