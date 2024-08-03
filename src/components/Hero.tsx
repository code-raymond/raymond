import React from 'react';
import TypedComponent from './TypedComponent';

const Hero: React.FC = () => {
    return (
        <div id="hero" className="hero route bg-image" style={{ backgroundImage: 'url(assets/img/hero-bg.jpg)' }}>
            <div className="overlay-itro"></div>
            <div className="hero-content display-table">
                <div className="table-cell">
                    <div className="container">
                        <h1 className="hero-title mb-4">Hi, I'm Raymond,</h1>
                        <p className="hero-title-label mb-4">A development engineer with expertise in</p>
                        <p className="hero-subtitle"> <TypedComponent
                            strings={["REACT", "TYPESCRIPT", "GO", "AWS", "Docker", "Kubernetes", "NoSQL & Relational DBs"]}
                            typeSpeed={100}
                            backSpeed={50}
                            backDelay={2000}
                            loop={true}
                        /></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
