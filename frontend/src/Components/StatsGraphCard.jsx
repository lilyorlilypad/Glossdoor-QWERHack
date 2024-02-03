import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const mockMetrics = {
    "MetricA": [1, 2.58, 2, 5, 4],
    "MetricB": [3, 3, 3.123, 4.234, 5],
    "MetricC": [1, 1, 2, 2, 3],
    "MetricD": [1, 2, 3, 4, 5],
    "MetricE": [1, 1, 1, 1, 1],
}
const StatsGraphCard = ({ companyId }) => {
    const [metricsData, setMetricsData] = useState({});

    useEffect(() => {
        const fetchAndSetMetricsData = async () => {
            // const metrics = await getMetricsByCompanyId(companyId); // Assume this function is async
            const metrics = mockMetrics
            setMetricsData(metrics);
        };

        fetchAndSetMetricsData();
    }, [companyId]);

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Rating'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Frequency'
                }
            }
        }
    };



    const prepareChartData = (metricArray, label) => {

        const valueCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

        // Aggregate values and count their frequencies
        metricArray.forEach(value => {
            const roundedValue = Math.round(value); // Round value to nearest integer
            if (roundedValue >= 1 && roundedValue <= 5) {
                // Increment the frequency of the rounded value in valueCounts
                valueCounts[roundedValue] = (valueCounts[roundedValue] || 0) + 1;
            }
        });

        // Extract the unique values (keys) and their frequencies (values) for the chart
        const chartLabels = Object.keys(valueCounts);
        const chartData = Object.values(valueCounts);

        return {
            labels: chartLabels,
            datasets: [
                {
                    label: label,
                    data: chartData,
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                },
            ],
        };
    };


    return (
        <div>
            {Object.entries(metricsData).map(([metricName, metricValues], index) => (
                <div key={index} className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">{`Histogram for ${metricName}`}</h3>
                    <Bar data={prepareChartData(metricValues, metricName)} options={options} />
                </div>
            ))}
        </div>
    );
};

export default StatsGraphCard;
