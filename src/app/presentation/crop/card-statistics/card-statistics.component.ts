import { Component, OnInit } from '@angular/core';
import { MeasurementModel } from '../../../domain/models/Measurement/Measurement';

@Component({
  selector: 'app-card-statistics',
  templateUrl: './card-statistics.component.html',
  styleUrl: './card-statistics.component.css'
})
export class CardStatisticsComponent implements OnInit {
  measurements: MeasurementModel[] = [/*
    {
      id: 1,
      id_device: "DEV123",
      temp: 32.2,
      humedity: 67.1,
      air: 245.7,
      sun: 1123.29,
      date_and_hour: "02-04-2025 08:31:11"
    },
    {
      id: 2,
      id_device: "DEV123",
      temp: 32.5,
      humedity: 66.8,
      air: 244.2,
      sun: 1233.29,
      date_and_hour: "02-04-2025 08:31:26"
    },
    {
      id: 3,
      id_device: "DEV123",
      temp: 33.6,
      humedity: 66.5,
      air: 243.9,
      sun: 1242.29,
      date_and_hour: "02-04-2025 08:32:41"
    },
    {
      id: 4,
      id_device: "DEV123",
      temp: 33.6,
      humedity: 66.5,
      air: 244.1,
      sun: 1232.19,
      date_and_hour: "02-04-2025 08:32:56"
    }*/
  ];

  chartDataTemp: any;
  chartOptionsTemp: any;

  chartDataHum: any;
  chartOptionsHum: any;

  chartDataAir: any;
  chartOptionsAir: any;

  chartDataSun: any;
  chartOptionsSun: any

  ngOnInit(): void {
    this.generateMeasurements();
    this.setTempChart();
    this.setHumChart();
    this.setAirChart();
    this.setSunChart();
  }

  generateMeasurements() {
    for (let i = 0; i < 20; i++) {
      const date = new Date();
      date.setMinutes(date.getMinutes() + i * 2);
      this.measurements.push({
        id: i + 1,
        id_device: "DEV123",
        temp: 30 + Math.random() * 5,
        humedity: 60 + Math.random() * 10,
        air: 240 + Math.random() * 10,
        sun: 1100 + Math.random() * 200,
        date_and_hour: date.toLocaleString()
      });
    }
  }

  setTempChart() {
    const labels = this.measurements.map(m => m.date_and_hour);
    const values = this.measurements.map(m => m.temp);

    this.chartDataTemp = {
      labels,
      datasets: [
        {
          label: 'Temperatura (°C)',
          data: values,
          fill: true,
          borderColor: '#FF6384',
          backgroundColor: 'rgba(255,99,132,0.2)',
          tension: 0.4
        }
      ]
    };

    this.chartOptionsTemp = this.getDefaultOptions();
  }
  
  setHumChart() {
    const labels = this.measurements.map(m => m.date_and_hour);
    const values = this.measurements.map(m => m.humedity);

    this.chartDataHum = {
      labels,
      datasets: [
        {
          label: 'Humedad (%)',
          data: values,
          fill: true,
          borderColor: '#36A2EB',
          backgroundColor: 'rgba(54,162,235,0.2)',
          tension: 0.4
        }
      ]
    };

    
    this.chartOptionsHum = this.getDefaultOptions();
  }

  setAirChart() {
    const labels = this.measurements.map(m => m.date_and_hour);
    const values = this.measurements.map(m => m.air);

    this.chartDataAir = {
      labels,
      datasets: [
        {
          label: 'Calidad del Aire (ppm)',
          data: values,
          fill: true,
          borderColor: '#FFCE56',
          backgroundColor: 'rgba(255,206,86,0.2)',
          tension: 0.4
        }
      ]
    };

    this.chartOptionsAir = this.getDefaultOptions();
  }

  setSunChart() {
    const labels = this.measurements.map(m => m.date_and_hour);
    const values = this.measurements.map(m => m.sun);

    this.chartDataSun = {
      labels,
      datasets: [
        {
          label: 'Luz Solar (Lux)',
          data: values,
          fill: true,
          borderColor: '#4BC0C0',
          backgroundColor: 'rgba(75,192,192,0.2)',
          tension: 0.4
        }
      ]
    };

    this.chartOptionsSun = this.getDefaultOptions();
  }

  getDefaultOptions() {
    return {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: '#fff',
            font: {
              size: 14
            }
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#fff',
            maxRotation: 45,
            minRotation: 45,
            autoSkip: true,
            maxTicksLimit: 8
          }
        },
        y: {
          ticks: {
            color: '#fff'
          }
        }
      }
    };
  }
}
