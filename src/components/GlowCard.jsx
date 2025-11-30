import React, { useRef } from 'react'
import './GlowCard.css'

const GlowCard = ({children}) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        cardRef.current.style.setProperty("--x", `${x}px`);
        cardRef.current.style.setProperty("--y", `${y}px`);
    };

    const handleMouseLeave = () => {
        cardRef.current.style.setProperty("--x", `-9999px`);
        cardRef.current.style.setProperty("--y", `-9999px`);
    };
    return (
        <div
            className="card"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="card-content">{children}</div>
        </div>
    )
}

export default GlowCard