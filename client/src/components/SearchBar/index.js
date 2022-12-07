import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';
import {searchGoogleMaps, searchGoogleMapsz } from '../../utils/API';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import './style.css'

function SearchBar() {

  const [searchedMaps, setSearchedMaps] = useState('');
  const [searchedMapsz, setSearchedMapsz] = useState([]);
  const [name, setName] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [myOutput, setMyOutput] = useState([]);
  
  // create method to search for maps and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(searchInput);

    if (!searchInput) {
        return false;
      }
      
      try {
        searchGoogleMaps(searchInput)
        .then(data => {

          setSearchedMaps(data);
          setSearchInput('');
        })
      }  
      catch (err) {
        console.error(err);
      }
      
        searchGoogleMapsz(searchedMaps)
        .then(data => {
          setSearchedMapsz(data);
          
        })
      console.log(searchedMaps , "\n", "this\n", "is\n");
      console.log(searchedMapsz , "\n", "this\n", "iszzz\n");
        
        };
        const current = new Date();
        const timestamp = (current.getTimezoneOffset() * 60000);
        
  function calcTime(offset) {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (1000*offset));

    console.log("The local time is " + nd.toLocaleString());
    return nd.toLocaleString();
}

useEffect(() => {
  setName(calcTime(searchedMaps.rawOffset));
}, [searchedMaps])

    return (
          <div className="form-div">
               <Form className="d-flex align-center" onSubmit={handleFormSubmit}>
                   <Form.Control
                   name='searchInput'
                   value={searchInput}
                   onChange={(e) => setSearchInput(e.target.value)}
                   type='text'
                   size='lg'
                   placeholder='Search for a city'
                   />
                   <Button variant="outline-success" type='submit' >Create</Button>
               </Form> 

            <div>
              <div className="table-info">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Datetime</th>
                            <th>Class</th>
                            <th>Approach</th>
                            <th>Movement</th>
                            <th>Lane</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name} </td>
                            <td>Car</td>
                            <td>North Bound</td>
                            <td>Through</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            </div>
      
            </div>
    )
}

export default SearchBar