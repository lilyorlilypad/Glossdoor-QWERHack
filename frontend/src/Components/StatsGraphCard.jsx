import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import apiConfig from "../apiConfig";
import Chart from 'chart.js/auto';
import AverageScoreBar from './AverageScoreBar';
import {metricDisplayNames} from "../utils/metricNames";


const mockMetrics = {
    "MetricA": [1, 2.58, 2, 5, 4],
    "MetricB": [3, 3, 3.123, 4.234, 5],
    "MetricC": [1, 1, 2, 2, 3],
    "MetricD": [1, 2, 3, 4, 5],
    "MetricE": [1, 1, 1, 1, 1],
}
const StatsGraphCard = ({companyId}) => {
    const [metricsData, setMetricsData] = useState({});
    const [averageScores, setAverageScores] = useState({});


    useEffect(() => {
        const getMetricsByCompanyIdUrl = apiConfig.baseUrl + apiConfig.companyCatalogs.getMetrics(companyId);
        const fetchAndSetMetricsData = async () => {
            await fetch(getMetricsByCompanyIdUrl)
                .then(response => {
                    if (!response.ok) {
                        if (response.status === 500) {
                            throw new Error("Server error: No metrics available");
                        } else {
                            throw new Error("Failed to fetch metrics");
                        }
                    }
                    return response.json();
                })
                .then(metrics => {
                    setMetricsData(metrics);
                })
                .catch(error => {
                console.error("Failed to fetch metrics:", error);
                setMetricsData({});
            })


        };

        fetchAndSetMetricsData();


    }, [companyId]);

    useEffect(() => {
        // Check if metricsData is not empty
        if (Object.keys(metricsData).length > 0) {
            const averages = Object.fromEntries(
                Object.entries(metricsData).map(([key, values]) => [
                    key,
                    values.reduce((sum, val) => sum + val, 0) / values.length
                ])
            );
            setAverageScores(averages);
        }
    }, [metricsData]); // Dependency array includes metricsData
    console.log(metricsData)
    console.log(metricsData.length)


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
                    backgroundColor: 'rgba(135, 179, 184, 0.5)', // Adjusted for 'secondary' color
                    borderColor: 'rgba(135, 179, 184, 1)', // Adjusted for 'secondary' color
                    borderWidth: 1,
                },
            ],
        };
    };


    return (
        <div>
            {Object.keys(metricsData).length === 0 ? (
                    <p>No metrics data available.</p> // Filler message when metricsData is empty
                ) : (
                    <>
                        {/*Average score*/}
                        {Object.entries(averageScores).map(([metricName, avg], index) => (
                            <AverageScoreBar
                                key={index}
                                metricName={metricName}
                                averageScore={avg}
                                maxScore={5}
                            />
                        ))}

                        {/*Histogram*/}
                        {Object.entries(metricsData).map(([metricName, metricValues], index) => (
                            <div key={index} className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">{`Histogram for ${metricDisplayNames[metricName] || metricName}`}</h3>
                                <Bar data={prepareChartData(metricValues, metricDisplayNames[metricName] || metricName)} options={options}/>
                            </div>
                        ))}
                    </>
                )
            }
        </div>
    );
};

export default StatsGraphCard;
