let ctx = document.getElementById('myChart').getContext('2d');
let labels = ['Saldo','Casa/Apartamento', 'Alimentacao', 'Saude', 'Transporte', 'Educacao', 'Lazer e extras'];
let colorHex = ['#28a745', '#ffc107', '#28a745', '#007bff', '#343a40', '#17a2b8', '#dc3545'];

let myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [40,10,10,10,10,10,10],
      
      backgroundColor: colorHex
    }],
    labels: labels
  },
  options: {
    responsive: true,
    legend: {
      position: 'left'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -2,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '14'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})