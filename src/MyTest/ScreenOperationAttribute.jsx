const screenOptions = {
    headerShown: true, // Hide the header for all screens
    headerStyle: {
        backgroundColor: 'grey',
        elevation: 0, // for Android shadow removal
    },
    headerTintColor: 'white', // Sets the color of header text and icons
    headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    headerBackTitleVisible: true, // Hide the back button label
    headerBackTitleStyle: {
        color: 'green',
    },
    cardStyle: {
        backgroundColor: '#fff',
    },
    gestureEnabled: false, // Enable gestures for screen navigation
    gestureDirection: 'horizontal', // Allow horizontal gestures
    safeAreaInsets: {
        top: safeAreaInsetsValue,
        bottom: safeAreaInsetsValue,
        left: 0, // No left padding
        right: 0, // No right padding
    },
};

export default screenOptions;