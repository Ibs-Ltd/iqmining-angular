import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as moment from 'moment'

@Component({
  selector: 'app-income-chart',
  templateUrl: './income-chart.component.html',
  styleUrls: ['./income-chart.component.scss']
})
export class IncomeChartComponent implements OnInit {

  @Input() data = []
  highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'areaspline',
      height: 350
    },
    title: {
      text: ''
    },
    subtitle: {
      style: {
        position: 'absolute',
        right: '0px',
        bottom: '10px'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: -150,
      y: 100,
      floating: true,
      borderWidth: 1,

      // backgroundColor: (
      //   Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
      //   '#FFFFFF'
    },
    xAxis: {
      categories: ['1 July, 2021', '2 July, 2021', '3 July, 2021', '4 July, 2021', '5 July, 2021',
        '6 July, 2021', '7 July, 2021', '8 July, 2021', '9 July, 2021', '10 July, 2021', '11 July, 2021', '12 July, 2021', '13 July, 2021']
    },
    yAxis: {
      title: {
        text: 'Income'
      }
    },
    tooltip: {
      shared: true, valueSuffix: ' BTC'
    },
    plotOptions: {
      area: {
        fillOpacity: 0.5
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Income',
        data: [1, 3, 4, 3, 3, 5, 4, 1, 10, 6, 8, 0.5, 3]
      }
    ]
  };
  constructor() { }

  ngOnInit() {
    this.chartOptions.xAxis.categories = []
    this.chartOptions.series[0].data = []
    this.data.forEach(it => {
      this.chartOptions.xAxis.categories.push(moment.utc(it.calculationDate).format('DD MMMM, YYYY'))
      this.chartOptions.series[0].data.push(+it.balance)
    })
  }

}
