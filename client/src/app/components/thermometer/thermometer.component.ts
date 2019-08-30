import { Component, OnInit, Input } from '@angular/core';
import { TrackFeatures } from '../../data/track-features';

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.css']
})
export class ThermometerComponent implements OnInit {
  //TODO: define Input fields and bind them to the template.
  @Input() featureData:TrackFeatures;
  @Input() featureType: string;
  featurePercent: string;
  backgroundColor;
  
  
  

  constructor() { }

  ngOnInit() {
  console.log(this.featureData);
  console.log(this.featureType);
  this.featurePercent = (this.featureData.featureToPercent[this.featureType]*100).toFixed() + '%';
  console.log(this.featurePercent);
  this.backgroundColor = this.featureData.color(this.featureType);
  
  }

}
