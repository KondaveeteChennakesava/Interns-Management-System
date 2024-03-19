import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { MDBDataTable } from "mdbreact";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const axiosAPI = axios.create();

const GetIntern = () => {
  const [intern, setIntern] = useState([]);

  useEffect(() => {
    axiosAPI.get("http://localhost:1432/api/get-interns").then((response) => {
      setIntern(response.data.interns);
    });
  }, []);

  // const handleDelete = () => {}
  const handleDelete = (id) => {
    axiosAPI.delete("http://localhost:1432/api/delete-intern/" + id).then((res) => {
        console.log(res);
        alert("Data deleted successfully");
        setIntern(intern.filter(event => event._id !== id));
    }).catch(error => {
        console.error('Error deleting event:', error);
        alert("Failed to delete event");
    });
};

  const data = {
    columns: [
      {
        label: "Intern Id",
        field: "internId",
        sort: "asc",
        width: 200,
      },
      {
        label: "Name",
        field: "username",
        sort: "asc",
        width: 150,
      },
      {
        label: "Technology",
        field: "technology",
        sort: "asc",
        width: 150,
      },
      {
        label: "Slot",
        field: "slot",
        sort: "asc",
        width: 100,
      },
      {
        label: "Mobile Number",
        field: "mobileNo",
        sort: "asc",
        width: 100,
      },
      {
        label: "Gender",
        field: "gender",
        sort: "asc",
        width: 100,
      },
      {
        label: "Passout Year",
        field: "passout",
        sort: "asc",
        width: 100,
      },
      {
        label: "Branch",
        field: "branch",
        sort: "asc",
        width: 270,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 100,
      },
      {
        label: "Bank Account Number",
        field: "bankAcntNo",
        sort: "asc",
        width: 100,
      },
      {
        label: "Account Holder Name",
        field: "acntHolderName",
        sort: "asc",
        width: 100,
      },
      {
        label: "IFSC Code",
        field: "ifscCode",
        sort: "asc",
        width: 100,
      },
      {
        label: "Bank Branch Name",
        field: "bankBranch",
        sort: "asc",
        width: 100,
      },
      {
        label: "EDIT",
        field: "edit",
        sort: "disabled",
        width: 100,
      },
      {
        label: "DELETE",
        field: "delete",
        sort: "disabled",
        width: 150,
      },
    ],
    rows: intern.map((event) => ({
      ...event,
      edit: (
        <td>
          <Link to={`/api/edit-intern/${event._id}`} className='link'>
            <Button className="btn btn-info">Edit</Button>
          </Link>
        </td>
      ),
      delete: (
        <Button
          onClick={() => handleDelete(event._id)}
          className="btn btn-danger"
        >
          delete
        </Button>
      ),
    })),
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Tables" breadcrumbItem="Tables" />
        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <CardTitle className="h4">Interns List</CardTitle>
                <div className="table-rep-plugin">
                  <div
                    className="table-responsive mb-0"
                    data-pattern="priority-columns"
                  >
                    <MDBDataTable
                      responsive
                      striped
                      bordered
                      data={data}
                      noBottomColumns
                    />
                  </div>
                </div>
                <Button className="btn btn-primary">This is a button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default GetIntern;
