import { useState, useEffect } from "react";

const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowScrollTopButton(true);
            } else {
                setShowScrollTopButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
    };    

    return (
        <div>
            {showScrollTopButton && (<p style={{ position: 'fixed', bottom: '15px', right: '20px', color: 'black', height: '40px', width: '40px' }} onClick={scrollTop}>TOP</p>)}
        </div>
    );
};

export default ScrollToTop;