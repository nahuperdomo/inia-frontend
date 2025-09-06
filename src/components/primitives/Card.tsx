import React from "react";
const Card: React.FC<{ children: React.ReactNode; className?: string; role?: string }>
    = ({ children, className = "", role }) => (
        <section role={role} className={`bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm border rounded-2xl shadow-sm ${className}`}>
            {children}
        </section>
    );
export default Card;