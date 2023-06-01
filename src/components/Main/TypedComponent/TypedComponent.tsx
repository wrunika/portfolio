import React from 'react';
import Typed from 'typed.js';

export const TypedComponent = () => {
    // Create reference to store the DOM element containing the animation
    const typingText = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(typingText.current, {
            strings: [`<strong>Front-end <strong style="color: #ff9301">Developer</strong></strong>`],
            typeSpeed: 50,
            loop: true,
            backSpeed: 50,
            startDelay: 800,
            backDelay: 800
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <span ref={typingText} />
        </div>
    );
}