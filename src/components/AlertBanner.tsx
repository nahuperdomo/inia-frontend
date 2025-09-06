import React, { useState } from "react";
import IconInfo from "../components/icons/IconInfo";
const AlertBanner: React.FC<{ title?: string; message: string; onAccept?: () => void }>
    = ({ title = "Atención", message, onAccept }) => {
        const [open, setOpen] = useState(true);
        if (!open) return null;
        return (
            <div className="rounded-2xl border bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm">
                <div className="flex items-start gap-3 p-4 sm:p-5">
                    <IconInfo className="mt-0.5 size-5 text-neutral-700 dark:text-neutral-300" />
                    <div className="flex-1">
                        <h3 className="font-medium text-neutral-900 dark:text-neutral-50">{title}</h3>
                        <p className="text-sm text-neutral-700 dark:text-neutral-200 mt-1">{message}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setOpen(false)}
                            className="inline-flex size-8 items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500"
                            aria-label="Cerrar"
                        >
                            ×
                        </button>
                    </div>
                </div>
                <div className="flex justify-end px-4 pb-4 sm:px-5">
                    <button
                        onClick={() => { onAccept?.(); setOpen(false); }}
                        className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        );
    };
export default AlertBanner;