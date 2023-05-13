import React from 'react';
import { Card,Form,Row ,Button} from 'react-bootstrap';
import Select from 'react-select';
import './Register.css';

function Register() {
const option=[
  {value:'Active',label:'Active'},
  {value:'inActive',label:'inActive'}
]

  return (
    <>
    <div className='container mt-5'>
      <h2 className='text-center mt-3'>register employee details</h2>
      <Card className='shadow mt-3 p-3'>
        <div className='text-center'>
        <img className='border p-1 rounded-circle' height={'100px'} src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'/>
        </div>
        <Form >
          <Row >
          <Form.Group className="mb-3 col-lg-6 text-dark" controlId="formBasicname">
        <Form.Label>first name</Form.Label>
        <Form.Control type="text" name='fname' placeholder="Enter first name" />
        
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6 text-dark" controlId="formBasiclname">
        <Form.Label>last name</Form.Label>
        <Form.Control type="text" name='lname' placeholder="Enter last name" />
        
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6 text-dark" controlId="formBasicemail">
        <Form.Label>email</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6 text-dark" controlId="formBasicname">
        <Form.Label>mobile</Form.Label>
        <Form.Control type="text" name='mobile' placeholder="Enter mobile" />
        
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6 text-dark" controlId="formBasicname">
        <Form.Label>select gender</Form.Label>
        <Form.Check
            
            type={"radio"}
            label={"male"}
            name="gender"
           value={"male"}
          /><Form.Check
            
          type={"radio"}
          label={"female"}
          name="gender"
         value={"female"}
        />
        
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6 text-dark" controlId="formBasicstatus">
        <Form.Label>select employee status</Form.Label>

        <Select options={option}/>
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6 text-dark" controlId="formBasicpicture">
        <Form.Label>choose profile picture</Form.Label>
        <Form.Control type="file" name='profile' />
        
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6 text-dark" controlId="formBasiclocation">
        <Form.Label>employee location</Form.Label>
        <Form.Control type="text" name='location' placeholder='enter location' />
        
      </Form.Group>
      <Button type='submit' variant='primary' className='text-dark'>Submit</Button>
          </Row>
        </Form>
      </Card>
      </div>
      </>
  )
}

export default Register