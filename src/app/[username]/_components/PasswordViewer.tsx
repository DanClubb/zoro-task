"use client";

import { useState } from "react";

type PasswordViewerProps = {
    password: string;
};

export default function PasswordViewer({ password }: PasswordViewerProps) {
    const [showInput, setShowInput] = useState(false);
    return (
        <div className="flex justify-center items-center border border-slate-300 rounded w-fit mx-auto mt-4">
            <input
                type={showInput ? "text" : "password"}
                value={password}
                className="text-lg px-2 w-fit rounded"
                readOnly
            />
            <button
                className={`border-l border-slate-300 w-14 py-1 ${
                    showInput && "text-red-500"
                }`}
                onClick={() => setShowInput((prev) => !prev)}
            >
                {showInput ? "Hide" : "Show"}
            </button>
        </div>
    );
}
