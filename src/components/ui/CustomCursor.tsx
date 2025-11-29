"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const cursorOutlineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursorDot = cursorDotRef.current;
        const cursorOutline = cursorOutlineRef.current;

        if (!cursorDot || !cursorOutline) return;

        // Initial position off-screen
        gsap.set([cursorDot, cursorOutline], { xPercent: -50, yPercent: -50 });

        const onMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;

            // Dot follows immediately
            gsap.to(cursorDot, {
                x: clientX,
                y: clientY,
                duration: 0.1,
                ease: "power2.out",
            });

            // Outline follows with inertia (comet trail feel)
            gsap.to(cursorOutline, {
                x: clientX,
                y: clientY,
                duration: 0.5,
                ease: "power2.out",
            });
        };

        const onMouseDown = () => {
            gsap.to(cursorOutline, {
                scale: 0.8,
                duration: 0.1,
            });
        };

        const onMouseUp = () => {
            gsap.to(cursorOutline, {
                scale: 1,
                duration: 0.1,
            });
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
        };
    }, []);

    return (
        <>
            <div ref={cursorDotRef} className="cursor-dot pointer-events-none" />
            <div ref={cursorOutlineRef} className="cursor-outline pointer-events-none" />
        </>
    );
}
