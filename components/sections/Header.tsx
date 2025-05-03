"use client";

import React from "react";
import {useTheme} from "@/context/theme/useTheme";
import Navbar from "./Navbar";

interface HeaderProps {
    className?: string;
}

export default function Header({className = ""}: HeaderProps) {
    const {} = useTheme(); // Theme context is imported but not currently used

    return (
        <header className={`sticky top-0 z-50 ${className}`}>
            <Navbar/>
        </header>
    );
}