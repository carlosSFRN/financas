let ctx = document.getElementById('myChart').getContext('2d');
let labels = ['Casa/Apartamento', 'Alimentacao', 'Saude', 'Transporte', 'Educacao', 'Lazer e extras'];
let colorHex = ['#ffc107', '#EFCA08', '#43AA8B', '#253D5B'];

let myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [resultadoCasaApartamento, 10, 40, 20],
      
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
        offset: -10,
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
debugger;