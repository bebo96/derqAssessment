import React from 'react'
import { Table } from 'react-bootstrap';

function SiteList() {
    return (
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
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdozzz</td>
                            <td>@mdozz</td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fatzzz</td>
                            <td>@fatzzz</td>
                        </tr>
                        <tr>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
    )
}

export default SiteList