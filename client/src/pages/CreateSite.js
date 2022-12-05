import React from 'react'
import SearchBar from '../components/SearchBar';
import MyGoogleMap from '../components/GoogleMap';

function CreateSite() {
    return (
    <div className="site-page">
        <div className="create-container">
            <h2>CreateSite</h2>
            <SearchBar />
            <MyGoogleMap />
        </div>
    </div>
    )
}

export default CreateSite