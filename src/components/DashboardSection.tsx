import React from "react";
import Card from "./primitives/Card";
import SectionHeader from "./primitives/SectionHeader";
import MetricRow from "./primitives/MetricRow";
import ListButton from "./primitives/ListButton";


export interface DashboardItem { label: React.ReactNode; value?: React.ReactNode }
export interface DashboardSectionProps {
    title: string;
    icon: React.ReactNode;
    items: DashboardItem[];
    footer?: React.ReactNode;
    subtitle?: string;
}


const DashboardSection: React.FC<DashboardSectionProps> = ({ title, icon, items, footer, subtitle }) => (
    <Card className="border-dashed border-neutral-300 dark:border-neutral-700">
        <SectionHeader icon={icon} title={title} subtitle={subtitle} />
        <div className="px-4 sm:px-6 py-4">
            <div className="space-y-1">
                {items.map((it, idx) => (
                    <MetricRow key={idx} label={it.label} value={it.value} />
                ))}
            </div>
            <div className="mt-4 flex items-center">
                <ListButton aria-label={`Listar ${title}`} />
                {footer}
            </div>
        </div>
    </Card>
);
export default DashboardSection;