import { Component } from '@angular/core';
import {ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedImageUrl: string = "";
  predictionResult: any = "";
  private file:File;

  constructor(private apiService: ApiService)
  {

  }
  ngOnInit(){

  }
  readUrl(event: any)
  {
    if(event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      this.file = event.target.files[0];
      reader.onload = (event: any) => {
        this.selectedImageUrl = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }


  onPredict()
  {
    this.apiService.postAndPredictImage(this.file).subscribe(
      (data: any) => this.predictionResult= JSON.stringify(data)
    );
  }
}
