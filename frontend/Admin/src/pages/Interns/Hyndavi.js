import React, { useState } from "react";
import axios from "axios";
import { Card, CardBody, Col, Row, Label, Input } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { error } from "toastr";
let APP_URL = process.env.REACT_APP_DATABASEURL;
const axiosAPI = axios.create();

const currentDate = new Date();

const AddIntern = () => {
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    internId: "",
    campus: "",
    branch: "",
    gender: "",
    startDate: "",
    technology: "",
    endDate: "",
    passout: "",
    acntHolderName: "",
    bankBranch: "",
    ifscCode: "",
    bankAcntNo: "",
    mobileNo: "",
    createdDate: currentDate.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    }),
    addedBy: "testing",
    slot: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(formdata);
    const api = APP_URL + "api/add-intern";
    axiosAPI.post(api, formdata).then((res) => {
      // console.log(res);
      setFormdata({
        username: "",
        email: "",
        internId: "",
        campus: "",
        branch: "",
        startDate: "",
        gender: "",
        technology: "",
        passout: "",
        endDate: "",
        mobileNo: "",
        acntHolderName: "",
        bankBranch: "",
        ifscCode: "",
        bankAcntNo: "",
        createdDate: currentDate.toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        }),
        // updatedDate: "",
        addedBy: "testing",
        slot: "",
      });
      alert('Added successfully')
    });
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Form" breadcrumbItem="Form Elements" />
        <Row className="">
          <Col lg="8">
            <div className="glass-shade">
              {" "}
              {/* Apply glass shade effect */}
              <Card>
                <CardBody>
                  <h2 className="card-title text-center mb-4">Sign Up</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col md="6">
                      <div className="mb-3">
                          <Label htmlFor="username" className="form-label">
                            Name
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="username"
                            value={formdata.username}
                            onChange={(e) =>
                              setFormdata({
                                ...formdata,
                                username: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="internId" className="form-label">
                            Intern ID
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="internId"
                            value={formdata.internId}
                            onChange={(e) =>
                              setFormdata({
                                ...formdata,
                                internId: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="email" className="form-label">
                            Email
                          </Label>
                          <Input
                            type="email"
                            className="form-control"
                            id="email"
                            value={formdata.email}
                            onChange={(e) =>
                              setFormdata({
                                ...formdata,
                                email: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="gender" className="form-label">
                            Gender
                          </Label>
                          <select
                            className="form-control arrow-down"
                            id="gender"
                            value={formdata.gender}
                            onChange={(e) =>
                              setFormdata({
                                ...formdata,
                                gender: e.target.value,
                              })
                            }
                            required
                          >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                        <div className="mb-3 has-arrow">
                          <Label
                            htmlFor="passout"
                            className="form-label has-arrow"
                          >
                            Passout year
                          </Label>
                          <select
                            className="form-control"
                            id="passout"
                            value={formdata.passout}
                            onChange={(e) =>
                              setFormdata({
                                ...formdata,
                                passout: e.target.value,
                              })
                            }
                            required
                          >
                            <option value="">Select PassOut year </option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="campus" className="form-label">
                            Campus
                          </Label>
                          <select
                            className="form-control"
                            id="campus"
                            value={formdata.campus}
                            onChange={(e) =>
                              setFormdata({
                                ...formdata,
                                campus: e.target.value,
                              })
                            }
                            required
                          >
                            <option value="">Select Campus</option>
                            <option value="AEC">
                              Aditya Engineering College
                            </option>
                            <option value="aceACETt">
                              Aditya College of Engineering and Technology{" "}
                            </option>
                            <option value="ACE">
                              Aditya College of Engineering
                            </option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="branch" className="form-label">
                            Branch
                          </Label>
                          <select
                            className="form-control"
                            id="branch"
                            value={formdata.branch}
                            onChange={(e) =>
                              setFormdata({
                                ...formdata,
                                branch: e.target.value,
                              })
                            }
                            required
                          >
                            <option value="">Select Branch</option>
                            <option value="AIML">AIML</option>
                            <option value="CSE">CSE</option>
                            <option value="ECE">ECE</option>
                            <option value="IOT">IOT</option>
                            <option value="IT">IT</option>
                            <option value="DS">DS</option>
                            <option value="MECH">MECH</option>
                            <option value="EEE">EEE</option>
                            <option value="Civil">Civil</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="technology" className="form-label">
                            Technology
                          </label>
                          <select
                            className="form-control"
                            id="technology"
                            value={formdata.technology}
                            onChange={(e) =>
                              setFormdata({
                                ...formdata,
                                technology: e.target.value,
                              })
                            }
                            required
                          >
                            <option value="">Select Technology</option>
                            <option value="FullStack">FullStack</option>
                            <option value="AWS">AWS</option>
                            <option value="AIML">AIML</option>
                            <option value="Azure">Azure</option>
                            <option value="GoogleCloud">GoogleCloud</option>
                            <option value="AR/VR">AR/VR</option>
                            <option value="Pega">Pega</option>
                            <option value="Owlcoder">Owlcoder</option>
                            <option value="Java">Java</option>
                            <option value="Python">Python</option>
                            <option value="Cpp">Cpp</option>
                          </select>
                        </div>
                        <div>
                          {formdata.technology && (
                            <div className="mb-3">
                              <label htmlFor="slot" className="form-label">
                                Slot
                              </label>
                              <select
                                className="form-control"
                                id="slot"
                                value={formdata.slot}
                                onChange={(e) =>
                                  setFormdata({
                                    ...formdata,
                                    slot: e.target.value,
                                  })
                                }
                                required
                              >
                                {/* Display checkboxes based on the selected technology */}
                                <option value="">Select Slot</option>
                                <option value="(Mon-Wed) Morning - (Thu-Sat) Afternoon">
                                  (Mon-Wed) Morning - (Thu-Sat) Afternoon
                                </option>
                                <option value="(Mon-Wed) Afternoon - (Thu-Sat) Morning">
                                  (Mon-Wed) Afternoon - (Thu-Sat) Morning
                                </option>
                                <option value="(Mon-Sat) Morning">
                                  (Mon-Sat) Morning
                                </option>
                                <option value="(Mon-Sat) Afternoon">
                                  (Mon-Sat) Afternoon
                                </option>
                                <option value="(Mon-Wed) Morning">
                                  (Mon-Wed) Morning{" "}
                                </option>
                                <option value="(Mon-wed) Afternoon">
                                  (Mon-wed) Afternoon
                                </option>
                                <option value="(Thu-Sat)Morning">
                                  (Thu-Sat)Morning
                                </option>
                                <option value="(Thu-Sat)Afternoon">
                                  (Thu-Sat)Afternoon
                                </option>
                                <option value=" Night slot(Owlcoder)">
                                  Night slot(Owlcoder)
                                </option>
                              </select>
                            </div>
                          )}
                        </div>
                        {/* Add more fields here for the left side */}
                      </Col>
                      <Col md="6">
                      <div className="mb-3">
                          <Label htmlFor="mobileNo" className="form-label">
                            Mobile Number
                          </Label>
                          <Input
                            type="Number"
                            className="form-control"
                            id="mobileNo"
                            value={formdata.mobileNo}
                            onChange={(e) =>
                              setFormdata({
                                ...formdata,
                                mobileNo: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="technology" className="form-label">
                            Added By
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="addedBy"
                            value={formdata.addedBy}
                            onChange={(e) =>
                              setFormdata({
                                ...formdata,
                                addedBy: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="bankAcntNo" className="form-label">
                            Account Number
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="bankAcntNo"
                            value={formdata.bankAcntNo}
                            onChange={(e) =>
                              setFormdata({
                                ...formdata,
                                bankAcntNo: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="ifscCode" className="form-label">
                            IFSC Code
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="ifscCode"
                            value={formdata.ifscCode}
                            onChange={(e) =>
                              setFormdata({
                                ...formdata,
                                ifscCode: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="mb-3">
                          <Label
                            htmlFor="acntHolderName"
                            className="form-label"
                          >
                            Account HolderName
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="acntHolderName"
                            value={formdata.acntHolderName}
                            onChange={(e) =>
                              setFormdata({
                                ...formdata,
                                acntHolderName: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="bankBranch" className="form-label">
                            Account Branch
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="bankBranch"
                            value={formdata.bankBranch}
                            onChange={(e) =>
                              setFormdata({
                                ...formdata,
                                bankBranch: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="calendar" className="form-label">
                            Start Date:{" "}
                          </Label>
                          <Input
                            type="date"
                            className="form-control"
                            id="calendar"
                            value={formdata.startDate}
                            onChange={(e) =>
                              setFormdata({
                                ...formdata,
                                startDate: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          <Label htmlFor="calendar" className="form-label">
                            End Date:{" "}
                          </Label>
                          <Input
                            type="date"
                            className="form-control"
                            id="calendar"
                            value={formdata.endDate}
                            onChange={(e) =>
                              setFormdata({
                                ...formdata,
                                endDate: e.target.value,
                              })
                            }
                          />
                        </div>
                        {/* <div className="d-grid">
                          <button
                            type="submit"
                            onSubmit={handleSubmit}
                            className="btn btn-primary"
                          >
                            Add Intern
                          </button>
                        </div> */}
                      </Col>
                    </Row>
                    {/* Add more rows for additional sections */}
                    <div className="d-grid">
                      <button
                        type="submit"
                        onSubmit={handleSubmit}
                        className="btn btn-primary"
                      >
                        Add Intern
                      </button>
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
};

export default AddIntern;