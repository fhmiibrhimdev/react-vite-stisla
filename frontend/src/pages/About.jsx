import React from "react";
import Case from "../components/Case";

export default function About() {
    return (
        <Case>
            <div className="w-full max-w-lg">
                <h4 className="text-2xl">Hello React</h4>
                <p className="text-lg leading-relaxed text-gray-400">
                    About Page
                </p>
            </div>
        </Case>
    );
}
