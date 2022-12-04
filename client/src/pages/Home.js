import React from 'react'
import { Button } from 'react-bootstrap';
import SiteList from '../components/SiteList';

function Home() {
 

    return (
        <div className="home-page">
            <div className="container">
                <h2>Sites</h2>
                <Button variant="primary">Create Site</Button>{' '}
            </div>
            <SiteList />
        </div>
    )
}

export default Home