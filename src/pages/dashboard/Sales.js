import { Bar } from 'react-chartjs-2';

const Sales = () => {
    const data = {
        labels: ['Peru', 'Bolivia', 'Argentina', 'Chile', 'España'],
        datasets:[{
                label: 'Habitantes',
                backgroundColor: 'rgba(0,225,0,1)',
                borderColor: 'black',
                borderWidth:1,
                hoverBackgroundColor: '#1c1c1c1c',
                hoverBorderColor: '#ffffff80',
                data: [325.25, 145.12, 25.1, 142.36, 458.25]
        }]
    };
    const opciones = {
        maintainAspectRatio: false,
        responsive: true,
    }
    return(
        <div style={{ width: '100%', height: '100vh'}}>
            <h1>Sales</h1>
            <Bar data = {data} options={opciones} />
        </div>
    );
}

export default Sales;