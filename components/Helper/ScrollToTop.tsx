"use client";
import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {

    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className='fixed bottom-4 animate-pulse right-4'>

        </div>
    )
}

export default ScrollToTop;
