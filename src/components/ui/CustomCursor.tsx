"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const cursorDotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursorDot = cursorDotRef.current;

        if (!cursorDot) return;

        // Initial position off-screen
        gsap.set(cursorDot, { xPercent: -50, yPercent: -50 });

        const onMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;

            // Dot follows immediately
            gsap.to(cursorDot, {
                x: clientX,
                y: clientY,
                duration: 0.1,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (
        <div ref={cursorDotRef} className="cursor-dot pointer-events-none" />
    );
}
