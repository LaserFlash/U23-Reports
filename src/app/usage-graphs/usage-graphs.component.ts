import { Component, Input, OnInit } from '@angular/core';
import { UsageInfo } from '../objects/usageInfo';
import { Boats, UserFriendlyBoats } from '../Utils/menuNames'

import { BoatUsageService } from '../boat-usage.service'
import { BoatNameConversionHelper } from '../Utils/nameConversion'


@Component({
  selector: 'usage-graphs',
  templateUrl: './usage-graphs.component.html',
  styleUrls: ['./usage-graphs.component.css']
})
export class UsageGraphsComponent implements OnInit {
  @Input() dataLabel: string;
  @Input() chartTitle: string;

  chartData: any[] = [{ data: [0, 0, 0, 0, 0, 0, 0, 0], label: 'Hours Used' }];
  colors: Array<any> = [{
    backgroundColor: 'rgba(66,165,245,1)',
    borderColor: 'rgba(225,10,241)',
    pointBackgroundColor: 'rgba(66,165,245,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(66,165,245,1)'
  }];

  chartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: true,
  };

  // Only use boat data for boats with a userfriendly name
  chartLabels: string[] = UserFriendlyBoats.filter((s, i) => {
    let yes = false;
    Boats.forEach(j => {
      yes ? true : yes = i === j;
    })
    return yes;
  });

  public chartType = 'bar';
  public chartLegend = true;

  usageLastMonth: number[];

  constructor(private usageService: BoatUsageService) {
    this.usageLastMonth = usageService.lastMonthUsageEachBoat;
  }

  ngOnInit() {
    this.chartData = [{ data: this.usageService.usageTimes, label: this.dataLabel}];
    this.usageService.items.subscribe(() => {
      this.chartData = [{ data: this.usageService.usageTimes, label: this.dataLabel}];
    });
  }

  private getBoatName(v) {
    return BoatNameConversionHelper.boatNameFromNumber(v);
  }

}
