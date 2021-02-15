import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-one-problem',
  templateUrl: './one-problem.component.html',
  styleUrls: ['./one-problem.component.scss']
})
export class OneProblemComponent implements OnInit {

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

  /* testStart(name,description) : void{    
    this.child.hide();
    const dialogRef = this.dialog.open(TestDialogComponent, {
      width: '950px',      
      disableClose:true,
      data: {name: name, description: description}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');      
    });
  } */
}
