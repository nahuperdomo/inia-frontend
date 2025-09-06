import React from "react";
const MetricRow: React.FC<{ label: React.ReactNode; value?: React.ReactNode }>
    = ({ label, value }) => (
        <div className="grid grid-cols-[1fr_auto] items-center py-1.5">
            <div className="text-sm text-neutral-700 dark:text-neutral-200">{label}</div>
            {value !== undefined && (
                <div className="text-sm tabular-nums text-neutral-600 dark:text-neutral-300">{value}</div>
            )}
        </div>
    );
export default MetricRow;