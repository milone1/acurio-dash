import { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Sales() {
  const [ chartData, setChartData ] = useState({datasets:[],});
  
  const [ chartOptions, setChartOptions ] = useState({datasets:[],}); 

  useEffect(() => {
    setChartData({
      labels: ["Lima", "Peru", "Bolivia", "Chile", "España" ],
      datasets:[
        {
          label: "Ventas en todo el Mundo:",
          data: [12,55,34,120,450],
          borderColor: "rgb(53,125,152)",
          backgroundColor: "#1c1c1c"
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: { 
          position: 'top'
        },
        title: {
          display: true,
          text: 'VENTAS ECHAS EN LA SEMANA',
        }
      }
    })
  }, [])

  return (
    <div className="App" style={{width: '800px', heigth: '500px'}}>
      <Bar options={chartOptions} data={chartData} />
    </div>
  );
}

export default Sales;
