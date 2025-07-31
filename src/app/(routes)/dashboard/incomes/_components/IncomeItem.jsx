import React from "react";

function IncomeItem({ budget }) {
  const calculateProgressPerc = () => {
    const perc = (budget.totalSpend / budget.amount) * 100;
    return perc > 100 ? 100 : perc.toFixed(2);
  };

  const progress = calculateProgressPerc();

  return (
    <div className="p-5 border rounded-2xl hover:shadow-md cursor-pointer h-[200px] flex flex-col justify-between">
      {/* Top section */}
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <h2 className="text-2xl p-3 px-4 bg-slate-100 rounded-full">
            {budget?.icon}
          </h2>
          <div>
            <h2 className="font-bold">{budget.name}</h2>
            <h2 className="text-sm text-gray-500">{budget.totalItem} Item</h2>
          </div>
        </div>
        <h2 className="font-bold text-primary text-lg">
          ${budget.amount}
        </h2>
      </div>

      {/* Progress bar */}
      <div className="mt-4">
        <div className="h-2 bg-gray-200 rounded-full w-full">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-xs text-gray-500 mt-1 text-right">
          {progress}% spent
        </div>
      </div>
    </div>
  );
}

export default IncomeItem;
