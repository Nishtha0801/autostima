import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Chart() {
    let cnt = JSON.parse(localStorage.getItem("cnt"))
    const data = {
        labels: ['Bad Posture', 'Good Posture'],
        datasets: [
            {
                data: [cnt?.good, cnt?.bad],
                backgroundColor: [
                    '#C9B2F6',
                    '#51B1F7',
                ],
                borderWidth: 1,
            },
        ],
    };
    return <Pie data={data}  />;
}
