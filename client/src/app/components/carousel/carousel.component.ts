import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from '../../data/resource-data';
import { CarouselCardComponent } from '../carousel-card/carousel-card.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
	@Input() carouselId:string;
	@Input() resources:ResourceData[];

  constructor() {}

  ngOnInit() {
      console.log("my id: " + this.carouselId);
        
    /*
      for (var resource : resources){
        @CarouselCardComponent();
      }  

    */
  }

}
