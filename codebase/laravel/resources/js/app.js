import './bootstrap';
import Chart from 'chart.js/auto';

(async function() {
    const data = {
        labels: [10,20,30,40,50,60,70,80,90],
        datasets: [{
            label: 'Total cost',
            data: [
                25000,
                29000,
                33000,
                37000,
                41000,
                45000,
                49000,
                53000,
                57000,
            ],
            fill: false,
            borderColor: 'rgb(75,108,192)',
            tension: 0.1
        },{
            label: 'Revenue',
            data: [
                7000,
                14000,
                21000,
                28000,
                35000,
                42000,
                49000,
                56000,
                63000,
            ],
            fill: false,
            borderColor: 'rgb(192,93,75)',
            tension: 0.1

        },{
            label: 'Break-even',
            data: [
                null,
                null,
                null,
                null,
                null,
                null,
                49000,
                null,
                null,
            ],
            fill: true,
            borderColor: 'rgb(0,0,0)',
            tension: 0.3,
            // borderWidth: 25,
            pointBorderWidth: 20,
        }]
    };

    const config = {
        type: 'line',
        data: data,
    };

    new Chart(
        document.getElementById('break-even-chart'),
        config
    );
})();
