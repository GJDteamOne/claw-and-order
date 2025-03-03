import React from 'react';
import { useLocation } from 'react-router-dom';

function StartingPot() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const animal = params.get('animal');

    return <h1>{animal} Starting Pot</h1>;
}

export default StartingPot;