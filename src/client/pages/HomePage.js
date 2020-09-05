import React from 'react';

const Home = () => {
    return (
        <div>
            <div>I'm the dope component.</div>
            <button onClick={() => console.log('Hi There!')}>Click</button>
        </div>
    );
};

export default {
    component: Home
};