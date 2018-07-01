import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private postUrl  = 'http://localhost:8000/api/predict/'
  constructor(private httpClient: HttpClient) { }

  postAndPredictImage(file: File)
  {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      })
    };
    return this.httpClient.post(this.postUrl, file,);
  }
}
