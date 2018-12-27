import { Component } from '@angular/core';
import { AboutService } from '../about.service';

@Component({
  selector: 'emotion-trend',
  templateUrl: 'trend.html',
  styles: ['./trend.scss'],
  providers: [AboutService]
})

export class EmotionTrend {
  data: any;
  options: any;
  constructor(public service: AboutService) {
    // TODO: change col name 
    let res: any = this.service.getData();
    
    this.data = [];
    for(let i=0; i<res.rows.length; i++) {
      this.data.push({date: res.rows.item(i).date, emotionScore: res.rows.item(i).score})
    }

    this.refresh();
  }

  refresh() {
    this.options = {
      visualMap: {
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        min: 0,
        max: 400
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: this.data.map(function (item) {
          return item['date'];
        })
      },
      yAxis: {
        splitLine: {
          show: false
        }
      },
      series: {
        type: 'line',
        showSymbol: false,
        data: this.data.map(function (item) {
          return item['emotionScore'];
        })
      }
    };
  }

}
