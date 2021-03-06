import React, { useState } from 'react';

const Splash = (text: string) => {

    return (
        <div id="loading-page">
            <div className="spinner-border">
                <span className="sr-only"></span>
            </div>
            {text.length > 0 &&
                <div>{text}</div>
            }
        </div>
    );
}

export default Splash;