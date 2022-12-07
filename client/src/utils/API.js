export const searchGoogleMaps = (query) => {
    var post;
    var myString;
    
    const myResponse =  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${process.env.REACT_APP_MY_ENV_VARIABLE}`)
    .then(function(response){
        // console.log("test");
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
    
        // Store the post data to a variable
        post = data;
        myString = `${post.results[0].geometry.location.lat},${post.results[0].geometry.location.lng}`;
        // Fetch another API
        return myString;
        // return fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${myString}&timestamp=${timestamp}&key=${process.env.REACT_APP_MY_ENV_VARIABLE}`);

    }).catch(function (error) {
        console.warn(error);
    });
    
    return myResponse;
    
};
var secondPost;
export const searchGoogleMapsz = (data) => {
    const current = new Date();
    const timestamp = (current.getTimezoneOffset() * 60000);
    console.log("my data", data , "is this");
    console.log(timestamp);
    
    const myResponse = fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${data}&timestamp=${timestamp}&key=${process.env.REACT_APP_MY_ENV_VARIABLE}`)
    .then(function(response){
        // console.log("test");
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        secondPost = data;
        return console.log(secondPost.timeZoneId, "IS MY DATA");
    }).catch(function(error){
        console.warn(error);
    })
        
    return myResponse;
    
};
// export const searchGoogleMaps = (query) => {
    
//         alert( 'Lat: ' + query.latLng.lat() + ' and Longitude is: ' + query.latLng.lng() );
    
//     return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
//   };


export default searchGoogleMaps;