import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const Orientation = () => {
    const [orientation, setOrientation] = useState('');

    useEffect(() => {
        const getOrientation = () => {
            const { height, width } = Dimensions.get('window');
            setOrientation(height > width ? 'portrait' : 'landscape');
        };

        // Detect orientation changes
        Dimensions.addEventListener('change', getOrientation);

        // Initial orientation check
        getOrientation();

        // Clean up event listener
        return () => {
            Dimensions.removeEventListener('change', getOrientation);
        };
    }, []);

    return orientation; // Return the orientation state
};

export default Orientation;
