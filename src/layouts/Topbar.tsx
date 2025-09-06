import React from "react";
import IconMenu from "../components/icons/IconMenu";
const Topbar: React.FC = () => (
    <div className="sticky top-0 z-30 border-b bg-white/80 dark:bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-6xl px-3 sm:px-6">
            <div className="flex h-14 items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold tracking-wide">INIA</span>
                </div>
                <button className="inline-flex size-10 items-center justify-center rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="Abrir menú">
                    <IconMenu className="size-5" />
                </button>
            </div>
        </div>
    </div>
);
export default Topbar;