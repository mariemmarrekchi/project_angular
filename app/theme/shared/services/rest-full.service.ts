import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {team} from './teamClass'
import {tabletest} from './TableClass'
import{Envir} from './Envi'
@Injectable({
  providedIn: 'root'
})
export class RestFullService {
tests:team[];
table:tabletest[];
envi:Envir[];
  constructor(private httpModule : HttpClient) { }
  
  getData():Observable<any>{
    return this.httpModule.get("/GetTable");   
    //http://localhost/name of propject/route of my controllers 
    
  }
  getDataTst():Observable<any>{
    return this.httpModule.get('/GetTest');
  }
  getEnvir():Observable<any>{
    return this.httpModule.get('/Envi');
  }
}
