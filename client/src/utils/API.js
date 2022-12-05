const searchGoogleMaps = (query) => {
    return fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=39.6034810%2C-119.6822510&timestamp=1331161200&key=${process.env.REACT_APP_MY_ENV_VARIABLE}`);
};

export default searchGoogleMaps;