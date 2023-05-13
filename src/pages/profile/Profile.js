import React from 'react';
import { Card, Row } from 'react-bootstrap';
import './Profile.css';

function Profile() {
  return (
    <>
    <div className='container'>
      <Card className='shadow col-lg-6 mx-auto mt-5'>
        <Card.Body>
          <Row>
            <div className='col'>
              <div className='profile d-flex justify-content-center'>
              <img className='border p-1 rounded-circle' height={'200px'} width={'200px'} src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'/>
</div></div></Row>
<div className='text-center mt-5 text-dark'>
  <h3>max miller</h3>
  <h4><i className='fa-solid fa-envelope'></i>:-<span>max@gmail.com</span></h4>
   <h4><i className='fa-solid fa-mobile'></i>:-<span>5624785126</span></h4>
   <h4><i className='fa-solid fa-venus-mars'></i>:-<span>male</span></h4>
   <h4><i className='fa-solid fa-location-dot'></i>:-<span>Brooklyn</span></h4>
   <h4><i className='fa-solid fa-chart-line'></i>:-<span>active</span></h4>
</div>
</Card.Body>
</Card>
</div></>
  )
}

export default Profile