import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import searchGoogleMaps from '../../utils/API';

function SearchBar() {

    const [searchedMaps, setSearchedMaps] = useState([]);

    const [searchInput, setSearchInput] = useState('');
  const test = [];
 // create method to search for maps and set state on form submit
 const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(searchInput);

    if (!searchInput) {
        return false;
      }
      
      try {
        searchGoogleMaps(searchInput)
        .then(response => {
          return response.json()
        })
        .then(data => {
          // var localDate = new Date((Date.now() + data.dstOffset + data.rawOffset) * 1000);
          // console.log(localDate);
          setSearchedMaps(data);
          setSearchInput('');
        })
      }  
      catch (err) {
        console.error(err);
      }
  };

    return (
            <div className="form-div">
                <Form className="d-flex align-center" onSubmit={handleFormSubmit}>
                    <Form.Control
                    name='searchInput'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type='text'
                    size='lg'
                    placeholder='Search for a location'
                    />
                    <Button variant="outline-success" type='submit' >Create</Button>
                </Form> 

          
            <div>
              
              {searchedMaps.timeZoneId}
              
              
            </div>
          
      
      
            </div>
    )
}

export default SearchBar