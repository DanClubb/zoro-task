"use client";

import { useState } from "react";

export default function PasswordViewer() {
    const [showInput, setShowInput] = useState(false);
    return (
        <div className="flex justify-center items-center mt-4">
            <input
                type={showInput ? "text" : "password"}
                value="test123"
                className="text-lg w-fit "
            />
            <button onClick={() => setShowInput((prev) => !prev)}>
                {showInput ? "Hide" : "Show"}
            </button>
        </div>
    );
}
