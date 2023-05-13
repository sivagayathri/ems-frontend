import React from 'react'
import { Form,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Hometable from '../../Component/hometable/Hometable';
import './Home.css';
function Home() {
  const navigate=useNavigate()
  const adduser=()=>{
    //navigate to register
    navigate('/register')
  }
  return (
  <>  <div className='container mt-5'>
    <div className='main_div'>
      {/*search btn,add employee */}
      <div className='search_Add d-flex justify-content-between'>
        <div className='search col-md-4'>
          <Form className='d-flex'>
          <Form.Control type="text" placeholder="search" className='me-2 text-dark'/>
          <Button className='button text-dark' >search</Button>
          </Form>
        </div>
        <Button onClick={adduser} variant='success' className='text-dark'>add user</Button>

      </div>
    </div>
      <div className='second'>
        {/*table */}
        <Hometable/>
      </div>
  </div></>
  )
}

export default Home