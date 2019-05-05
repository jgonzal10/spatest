import { AfterViewInit, Component, OnInit  } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, NgForm } from '@angular/forms';
import { TemperatureService } from '../temperature.service';

export interface Temperature {
  temperature: string;
  date: number;
}

@Component({
  selector: 'app-temperature-table',
  templateUrl: './temperature-table.component.html',
  styleUrls: ['./temperature-table.component.css']
})
export class TemperatureTableComponent implements OnInit  {
  displayedColumns = ['date', 'temperature','actions'];
  temForm :FormGroup;
  average =0;
  highest =0;
  lowest =0;
  median =0;
  temperatures: Temperature[]
  constructor(private tem:TemperatureService, private fb:FormBuilder){

  }

  

  createForm() {
    this.temForm = this.fb.group({
      temperature: ['', Validators.required ]
    });
  }

  ngOnInit() {
    this.createForm()
    this.listTemperatures()
    this.getAverage()
    this.getHighest()
    this.getLowest()
    this.getMedian()
   
  }

  onFormSubmit(form:NgForm) {
    this.addTemperature(form)

  }

  addTemperature(temperature){
       this.tem.addTemperature(temperature.temperature)
  }

  listTemperatures(){
    this.tem.listTemperatures().subscribe((data: Temperature[]) => {
     // console.log('dat ',data)
      this.temperatures = data;
  });
  }


  deleteTemperature(id){
    this.tem.deleteTemperature(id).subscribe(res =>{
      console.log('Delete done')
    })
}

getAverage(){
  this.tem.getAverage().subscribe((data: number) => {
    this.average = data;
});
}
getHighest(){
  this.tem.getHighest().subscribe((data: number) => {
    this.highest = data;
});
}

getLowest(){
  this.tem.getLowest().subscribe((data: number) => {
    this.lowest = data;
});
}

getMedian(){
  this.tem.getMedian().subscribe((data: number) => {
    this.median = data;
});
}
}
