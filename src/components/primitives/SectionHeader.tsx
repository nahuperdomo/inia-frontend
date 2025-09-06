import React from "react";
const SectionHeader: React.FC<{ icon: React.ReactNode; title: string; subtitle?: string }>
    = ({ icon, title, subtitle }) => (
        <header className="flex items-center gap-3 border-b px-4 sm:px-6 py-3">
            <div className="inline-flex size-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                {icon}
            </div>
            <div className="min-w-0">
                <h2 className="text-lg font-semibold leading-none text-neutral-900 dark:text-neutral-50">{title}</h2>
                {subtitle && <p className="text-xs text-neutral-500 truncate">{subtitle}</p>}
            </div>
        </header>
    );
export default SectionHeader;