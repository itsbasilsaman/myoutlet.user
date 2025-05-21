import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse">
      <div className="mt-4 flex justify-between items-center py-3">
        <div className="flex">
          <div className="w-24 h-24 rounded-lg bg-gray-200 flex-shrink-0" />
          <div className="ml-3">
            <div className="h-6 w-32 bg-gray-200 rounded" />
            <div className="flex items-center mt-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-4 h-4 bg-gray-200 rounded-full mr-1" />
              ))}
            </div>
            <div className="h-6 w-16 bg-gray-200 rounded mt-1" />
            <div className="h-4 w-48 bg-gray-200 rounded mt-1" />
          </div>
        </div>
        <div className="h-10 w-10 border border-gray-200 rounded-lg" />
      </div>
    </div>
  );
};

export default SkeletonLoader; 