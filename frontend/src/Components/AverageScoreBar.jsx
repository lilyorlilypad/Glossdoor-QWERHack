import {metricDisplayNames} from "../utils/metricNames";

const AverageScoreBar = ({ metricName, averageScore, maxScore }) => {
    const barWidth = `${(averageScore / maxScore) * 100}%`; // Calculate width as a percentage
    return (
        <div className="my-4">
            <div className="text-sm font-medium text-gray-700">{metricDisplayNames[metricName] || metricName}</div>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                <div className="bg-blue-600 h-4 rounded-full" style={{ width: barWidth }}></div>
            </div>
            <div className="text-sm font-medium text-gray-700">{averageScore.toFixed(1)} / {maxScore}</div>
        </div>
    );
};

export default AverageScoreBar;