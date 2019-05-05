import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {
  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addTemperature(temperature){
    const temperatureO ={
      temperature:temperature,
      date:new Date()
    }

   return this.http.post(`${this.uri}/create`, temperatureO)
   .subscribe(res => console.log('Temperature added ', res));
}

listTemperatures(){

 return this.http.get(`${this.uri}/temperatures`);
}

deleteTemperature(id){

  return this.http.delete(`${this.uri}/delete/${id}`);
 }

 /**Math */
 getAverage(){
  return this.http.get(`${this.uri}/average`);
 }
  
 getHighest(){
  return this.http.get(`${this.uri}/highest`);
 }

 getLowest(){
  return this.http.get(`${this.uri}/lowest`);
 }

 getMedian(){
  return this.http.get(`${this.uri}/median`);
 }
}
