import React from 'react'
import { Card, Row, Table } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function Hometable() {
    return (
        <><div className='container mt-5'>
            <Row>
                <div className='col'>
                    <Card className='shadow'>
                        <Table className='align-items-center' responsive='sm'>
                            <thead className='thead-dark'>
                                <tr className='table-dark'>
                                    <th>ID</th>
                                    <th>name</th>
                                    <th>email</th>
                                    <th>gender</th>
                                    <th>status</th>
                                    <th>profile</th>
                                    <th>action</th>
                                </tr>
                            </thead>
                            <tbody className='text-dark'>
                                <td>1</td>
                                <td>sreeraj</td>
                                <td>sreeraj@gmail.com</td>
                                <td>male</td>
                                <td>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                          Active
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item>Action</Dropdown.Item>
                                            <Dropdown.Item>InAction</Dropdown.Item>
                                           
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                                <td><img className='rounded' height={'100px'} src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'/></td>
                                <td> <Dropdown>
                                        <Dropdown.Toggle  variant='light' id="dropdown-basic1">
                                          <i class='fa-solid fa-ellipses-vertical fs-4'></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item><Link to={'/profile/1'} className='text-decoration-none'>
                                            <i className='fa-solid fa-eye text-success'></i>
                                            <span className='fs-5 text-dark'>view</span>
                                            </Link></Dropdown.Item>
                                            <Dropdown.Item><Link to={'/edit/1'} className='text-decoration-none'>
                                            <i className='fa-solid fa-pen text-success'></i>
                                            <span className='fs-5 text-dark'>edit</span>
                                            </Link></Dropdown.Item>
                                            <Dropdown.Item>
                                            <div>
                                            <i className='fa-solid fa-trash text-success'></i>
                                            <span className='fs-5 text-dark'>delete</span>
                                            </div>
                                            </Dropdown.Item>
                                           
                                        </Dropdown.Menu>
                                    </Dropdown></td>
                            </tbody>
                        </Table>
                    </Card>
                </div>
            </Row>
        </div></>
    )
}

export default Hometable