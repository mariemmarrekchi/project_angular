import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { RestFullService } from 'src/app/theme/shared/services/rest-full.service';
import { Envir } from 'src/app/theme/shared/services/Envi';
@Component({
  selector: 'app-testenvir',
  templateUrl: './testenvir.component.html',
  styleUrls: ['./testenvir.component.scss']
})
export class TestenvirComponent implements OnInit {

  isLinear = false;
  table:Envir[] = new Array<Envir>();

  error:'';

  // requirments = [
  //   {
  //     name:"BDC21_PH_CA_CL_4630",
  //     description:'In condition "Nachlauf_aktiv = Follow up" active a key has been found within the past 5 s (codable, KM_TIME_FLUP_PWF_AUTH).'
  //   },
  //   {
  //     name:"BDC21_PH_CA_CL_10656",
  //     description:"If the outside push button is pressed at an arbitrary door (DRD,PSD,DRDR,PSDR),\n \
  //     the  ZSG must send the corresponding wake-up reason ALM_CL_STAT_OUTSIDE_PUBU<door> if the playprotection is not active  (see BDC21_PH_CA_CL_11406).\
  //     Remark: \
  //     For every door, a seperate wake-up reason is defined. \
  //     Waking up the buses is usually connected with activation of KL30B (exeptions depending on ST_ENERG_PWMG and ST_LAW_RQ see system-specification)."
  //   },
  //   {
  //     name:"BDC21_PH_CA_CL_4233",
  //     description:"A function which is configured to a specific key shall only be executed if the vehicle has been unlocked previously by the respective key \
  //     or the function of this key includes unlocking the vehicle. \
  //     Remark:\
  //     The functions related to the buttons of the key do not need an unlock trigger to be activated"
  //   },
  //   {
  //     name:"BDC21_PH_CA_CL_4233",
  //     description:"A function which is configured to a specific key shall only be executed if the vehicle has been unlocked previously by the respective key \
  //     or the function of this key includes unlocking the vehicle. \
  //     Remark:\
  //     The functions related to the buttons of the key do not need an unlock trigger to be activated"
  //   }
  // ]

  constructor(private _formBuilder: FormBuilder,private restFull : RestFullService) { }

  ngOnInit() {
    this.getEnvir()
    /* this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    }); */
  }
  getEnvir():void{
    this.restFull.getEnvir().subscribe(
      res => {
        this.table = res as Envir[];
        console.log(res);
      },
      err => { this.error = err; console.log(err); }
  
    )
  }

}
