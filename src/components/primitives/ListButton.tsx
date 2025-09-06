import React from "react";
const ListButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>
    = ({ className = "", children = "Listar", ...rest }) => (
        <button
            type="button"
            className={`ml-auto inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 active:scale-[.99] transition ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
export default ListButton;