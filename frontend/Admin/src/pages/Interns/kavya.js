import React, { useState,useEffect } from "react"
import { useParams } from 'react-router-dom';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Input,
  FormGroup,
  Label,
  Button,
} from "reactstrap"
import axios from "axios";


// Import Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"


import "react-datepicker/dist/react-datepicker.css"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
const axiosAPI = axios.create();
let APP_URL = process.env.REACT_APP_DATABASEURL;
const Editform = () => {
  const[formdata,setFormdata]=useState({
    'eventname':'',
    'Startdate':"",
    'Noofdays':'',
    'Month':"",
    'Year':"",
    'Noofparticipants':""
    

})
const api=APP_URL+'addeventform';
// const {id} = useParams()
const id = window.location.pathname.split('/')[2];
// console.log(pathname)
    useEffect(()=>{
      console.log("sss")
      console.log(id)
      axiosAPI.get('http://localhost:5000/geteventbyid/'+id)
        .then((res)=>{console.log(res.data)
        setFormdata(res.data.eventdata)}
        )
        .catch((err)=>console.log(err))
    },[])
    const handleEdit=(e)=>{
        e.preventDefault();
        console.log(formdata)
        //http://localhost:3000/form
        axiosAPI.put('http://localhost:5000/updateevent/'+id,{formdata})
        .then((result)=>
        {
            alert("Updated successfully.")
            window.location.href='/getevent';

        })
    }

return (
    <>
      <div className="page-content">
        
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Tasks" breadcrumbItem="Create Task" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Add Event</CardTitle>
                  <form className="outer-repeater" onSubmit={handleEdit}>
                    <div data-repeater-list="outer-group" className="outer">
                      <div data-repeater-item className="outer">
                        <FormGroup className="mb-4" row >
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            Event Name
                          </Label>
                          <Col lg="10">
                            <Input
                              id="eventname"
                              name="eventname"
                              type="text"
                              className="form-control"
                              placeholder="Enter Event Name..."
                              value={formdata.eventname} 
                              onChange={(e)=>setFormdata({...formdata,eventname:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            StartDate
                          </Label>
                          <Col lg="10">
                            <Input
                              id="Startdate"
                              name="Startdate"
                              type="date"
                              className="form-control"
                              value={formdata.Startdate} 
                              onChange={(e)=>setFormdata({...formdata,Startdate:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            No of days
                          </Label>
                          <Col lg="10">
                            <Input
                              type="text"
                              name="No.ofdays"
                              id="noofdays"
                              className="form-control"
                              value={formdata.Noofdays} 
                              onChange={(e)=>setFormdata({...formdata,Noofdays:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            month
                          </Label>
                          <Col lg="10">
                            <Input
                              type="text"
                              name="Month"
                              id="month"
                              className="form-control"
                              value={formdata.Month} 
                              onChange={(e)=>setFormdata({...formdata,Month:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            Year
                          </Label>
                          <Col lg="10">
                            <Input
                              type="text"
                              name="Year"
                              id="year"
                              className="form-control"
                              value={formdata.Year} 
                              onChange={(e)=>setFormdata({...formdata,Year:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            No of participants
                          </Label>
                          <Col lg="10">
                            <Input
                              type="text"
                              name="No.of participants"
                              id="noofparticipants"
                              className="form-control"
                              value={formdata.Noofparticipants} 
                              onChange={(e)=>setFormdata({...formdata,Noofparticipants:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            
                          </Label>
                          <Col lg="10">
                            <Input
                              id="button"
                              name="submit"
                              type="submit"
                              className="form-control"
                            />
                          </Col>
                        </FormGroup>
                       
                      </div>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
      </div>
    </>
  )
}

export default Editform