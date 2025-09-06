import React from "react";
const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="mx-auto max-w-6xl px-3 sm:px-6 py-6 sm:py-8">{children}</div>
);
export default Container;