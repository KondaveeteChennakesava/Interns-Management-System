import React, { useState } from "react";
import { Card, CardBody, Col, Row, Label, Input } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";

const Attendance = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [register, setRegister] = useState("");
  const [campus, setCampus] = useState("");
  const [branch, setBranch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { username, email, register, campus, branch });
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Form" breadcrumbItem="Form Elements" />
        <Row className="justify-content-center">
          <Col lg="6">
            <div className="glass-shade">
              <Card>
                <CardBody>
                  <h2 className="card-title text-center mb-4">Sign Up</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <Label htmlFor="name" className="form-label">Student Name</Label>
                      <Input type="text" className="form-control" id="name" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                      <Label htmlFor="register" className="form-label">Register Number</Label>
                      <Input type="text" className="form-control" id="register" value={register} onChange={(e) => setRegister(e.target.value)} required />
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">Find the data</button>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default Attendance;