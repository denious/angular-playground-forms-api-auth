import { Component, OnInit } from '@angular/core';
import { UnitsOfMeasureService } from '../api/services';

@Component({
  selector: 'app-uoms',
  templateUrl: './uoms.component.html',
  styleUrls: ['./uoms.component.sass']
})
export class UomsComponent implements OnInit {

  constructor(private uomsService: UnitsOfMeasureService) { }

  ngOnInit() {
    const params: UnitsOfMeasureService.GetParams = {
      Filter: "contains(Value,'m')",
      Skip: 1,
      Top: 2
    };

    this.uomsService.Get(params).subscribe(o => {
      console.log(o);
    });
  }

}
