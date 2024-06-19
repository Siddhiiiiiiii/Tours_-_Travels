import React from 'react';

const Chart = () => {
  const analyticsData = [
    { month: 'Jan', visitors: 200 },
    { month: 'Feb', visitors: 350 },
    { month: 'Mar', visitors: 500 },
    { month: 'Apr', visitors: 600 },
    { month: 'May', visitors: 750 },
    { month: 'Jun', visitors: 900 },
  ];

  const maxVisitors = Math.max(...analyticsData.map(data => data.visitors));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Visitors Analytics</h2>
      <div className="w-full max-w-lg">
        <div className="flex justify-between items-end">
          {analyticsData.map((data, index) => (
            <div key={index} className="text-center">
              <div>{data.month}</div>
              <div className="h-20 bg-blue-500 rounded" style={{ height: `${(data.visitors / maxVisitors) * 100}%` }}></div>
            </div>
          ))}
        </div>
        <div className="flex justify-between border-t border-gray-300 pt-2">
          {analyticsData.map((data, index) => (
            <div key={index} className="w-6"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chart;
