import React from 'react'
import { Button } from 'react-bootstrap';
import SiteList from '../components/SiteList';
import {BrowserRouter as Router, Link} from 'react-router-dom';

function Home() {
    return (
        <div className="home-page">
            <div className="container">
                <h2>Sites</h2>
                <Link to="/CreateSite">
                <Button 
                    variant="primary"
                >
                    Create Site
                </Button>
                </Link>
            </div>
            <SiteList />
        </div>
    )
}

export default Home