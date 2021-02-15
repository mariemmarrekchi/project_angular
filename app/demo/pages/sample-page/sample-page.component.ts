import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent implements OnInit {

  @ViewChild('exampleModalCenter', { static: false }) child: any;

  teamName: string;

  requirements: any;

  teamDetail: any;

  testCases:any;

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

  constructor() { }

  ngOnInit() {
  }

  onClick($event){
    this.child.hide();
    this.testCases =[ {
      name:"Test case 1",
      code: "Test case 1 code",
      bugs: 1,
    },{
      name:"Test case 2",
      code: "Test case 2 code",
      bugs: 20,
    },{
      name:"Test case 3",
      code: "Test case 3 code",
      bugs: 8,
    }]
  }

  change($event: any) {
    if ($event.toElement.text != undefined) {
      this.teamName = $event.toElement.text;
      this.requirements = [
        {
          name: 'Req 1',
          disabled: false
        },
        {
          name: 'Req 2',
          disabled: true
        },
        {
          name: 'Req 3',
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

}
