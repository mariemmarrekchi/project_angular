import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalOptions, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent implements OnInit {

  @ViewChild('exampleModalCenter', { static: false }) child: any;

  teamName: string;

  problems: any;

  teams = [
    {
      name: "Team 1",
      code: "Team 01 code",
      bugs: 15,
      vulnerabilty: 14,
      codeSmells: 10,
      coverage: "10%",
      duplication: "25%"
    }
    , {
      name: "Team 2",
      code: "Team 02 code",
      bugs: 10,
      vulnerabilty: 4,
      codeSmells: 1,
      coverage: "60%",
      duplication: "25%"
    }];

  teamDetail: any;

  constructor(
    private modalService: NgbModal
  ) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    }
  }


  ngOnInit() {
  }

  onClick($event){
    this.child.hide();
    this.teamDetail = {
      code: $event.target.innerHTML +"code",
      bugs: 10,
      vulnerabilty: 4,
      codeSmells: 1,
      coverage: "60%",
      duplication: "25%"
    }
  }

  fetchNews() {
    alert("Prob 1");
  }
  
  change($event: any) {
    if ($event.toElement.text != undefined) {
      this.teamName = $event.toElement.text;
      this.problems = [
        {
          name: 'Problem 1',
          disabled: false
        },
        {
          name: 'Problem 2',
          disabled: true
        },
        {
          name: 'Problem 3',
          disabled: false
        }
      ];
      /*       this.child.modal({
              backdrop: 'static',
              keyboard: false
            }) */
      this.child.show();

      console.log('Changing tab', $event.toElement.text);
    }
  };

  closeResult: string;
  modalOptions: NgbModalOptions;


  open(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}


