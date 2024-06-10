import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const AxiosTest = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Your API endpoint URL
        const apiUrl = 'https://api.example.com/data';

        // Making a GET request using Axios
        axios.get(apiUrl)
            .then(response => {
                setData(response.data); // Set the response data to state
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []); // This effect runs once on component mount

    return (
        <View>
            <Text>API Response:</Text>
            <Text>{JSON.stringify(data)}</Text>
        </View>
    );
};

export default AxiosTest;
