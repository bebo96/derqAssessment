import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';
import './style.css'
import axios from 'axios';
import './style.css'
// import { saveDetection } from '../../utils/API';
function SearchBar() {

  const [name, setName] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  var myString;



  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(searchInput);
    if (!searchInput) {
      return false;
    }


    function calcTime(offset) {
      var d = new Date();
      var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
      var nd = new Date(utc + (1000 * offset));

      console.log("The local time is " + nd.toLocaleString());
      return nd.toLocaleString();
    }

    // Make first two requests to get local time of city 
    const [firstResponse] = await Promise.all([
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchInput}&key=${process.env.REACT_APP_MY_ENV_VARIABLE}`),
    ]);

    myString = `${firstResponse.data.results[0].geometry.location.lat},${firstResponse.data.results[0].geometry.location.lng}`;
    const current = new Date();
    const timestamp = (current.getTimezoneOffset() * 60000);
    const thirdResponse = await axios.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${myString}&timestamp=${timestamp}&key=${process.env.REACT_APP_MY_ENV_VARIABLE}`);

    setName(calcTime(thirdResponse.data.rawOffset));
    // saveDetection(name);
    setSearchInput('');
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