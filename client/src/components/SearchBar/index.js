import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';
import searchGoogleMaps from '../../utils/API';
import './style.css'

function SearchBar() {

  const [searchedMaps, setSearchedMaps] = useState([]);
  const [name, setName] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  // create method to search for maps and set state on form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(searchInput);

    if (!searchInput) {
        return false;
      }
      
      try {
        searchGoogleMaps(searchInput, timestamp)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setSearchedMaps(data);
          console.log(data.timeZoneId);
          setSearchInput('');
        })
      }  
      catch (err) {
        console.error(err);
      }
  };
  const current = new Date();
  const timestamp = (current.getTimezoneOffset() * 60000);

  function calcTime(offset) {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (1000*offset));

    console.log("The local time is " + nd.toLocaleString());
}

useEffect(() => {
  
  if(searchedMaps.timeZoneId){
        setName(searchedMaps.timeZoneId);
        console.log(searchedMaps.timeZoneId);
        console.log(Date.now(), "THIS");
        console.log(current.getUTCSeconds(), "NOT THIS");
        // console.log(date);
        console.log(calcTime(searchedMaps.rawOffset));
    }
  
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
                    placeholder='Search for a location'
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
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdozzz</td>
                            <td>@mdozz</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            </div>
      
            </div>
    )
}

export default SearchBar