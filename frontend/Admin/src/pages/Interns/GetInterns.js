import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { MDBDataTable } from "mdbreact";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const axiosAPI = axios.create();

const GetIntern = () => {
  const [intern, setIntern] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedIntern, setSelectedIntern] = useState(null);
  const toggleModal = () => setModal(!modal);

  const viewInternDetails = (intern) => {
    setSelectedIntern(intern);
    toggleModal();
  };

  useEffect(() => {
    axiosAPI.get("http://localhost:1432/api/get-interns").then((response) => {
      setIntern(response.data.interns);
    });
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this intern?"
    );
    if (confirmDelete) {
      console.log(id);
      axiosAPI
        .delete("http://localhost:1432/api/delete-intern/" + id)
        .then((res) => {
          console.log(res);
          alert("Data deleted successfully");
          setIntern(intern.filter((intern) => intern._id !== id));
          toggleModal(); // Close modal after deleting intern
        })
        .catch((error) => {
          console.error("Error deleting intern:", error);
          alert("Failed to delete intern");
        });
    }
  };
  // const handleDelete = () => {}
  // const handleDelete = (id) => {
  //   console.log(id)
  //   axiosAPI
  //     .delete("http://localhost:1432/api/delete-intern/" + id)
  //     .then((res) => {
  //       console.log(res);
  //       alert("Data deleted successfully");
  //       setIntern(intern.filter((event) => event._id !== id));
  //     })
  //     .catch((error) => {
  //       console.error("Error deleting event:", error);
  //       alert("Failed to delete event");
  //     });
  // };

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
      // {
      //   label: "Mobile Number",
      //   field: "mobileNo",
      //   sort: "asc",
      //   width: 100,
      // },
      // {
      //   label: "Gender",
      //   field: "gender",
      //   sort: "asc",
      //   width: 100,
      // },
      // {
      //   label: "Passout Year",
      //   field: "passout",
      //   sort: "asc",
      //   width: 100,
      // },
      // {
      //   label: "Branch",
      //   field: "branch",
      //   sort: "asc",
      //   width: 270,
      // },
      {
        label: "Start Date",
        field: "startDate",
        sort: "asc",
        width: 100,
      },
      {
        label: "End Date",
        field: "endDate",
        sort: "asc",
        width: 100,
      },
      // {
      //   label: "Bank Account Number",
      //   field: "bankAcntNo",
      //   sort: "asc",
      //   width: 100,
      // },
      // {
      //   label: "Account Holder Name",
      //   field: "acntHolderName",
      //   sort: "asc",
      //   width: 100,
      // },
      // {
      //   label: "IFSC Code",
      //   field: "ifscCode",
      //   sort: "asc",
      //   width: 100,
      // },
      // {
      //   label: "Bank Branch Name",
      //   field: "bankBranch",
      //   sort: "asc",
      //   width: 100,
      // },
      {
        label: "Action",
        field: "view",
        sort: "asc",
        width: 200,
      },
      // {
      //   label: "EDIT",
      //   field: "edit",
      //   sort: "disabled",
      //   width: 100,
      // },
      // {
      //   label: "DELETE",
      //   field: "delete",
      //   sort: "disabled",
      //   width: 150,
      // },
    ],
    rows: intern.map((event) => ({
      ...event,
      view: (
        <Button
          onClick={() => viewInternDetails(event)}
          className="btn btn-info"
        >
          View
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
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Intern Details</ModalHeader>
        <ModalBody>
          {selectedIntern && (
            <Card>
              <CardBody>
                <h5 className="card-title"><b>{selectedIntern.username}</b></h5>
                <p>Email: {selectedIntern.email}</p>
                <p>Intern ID: {selectedIntern.internId}</p>
                <p>Mobile Number: {selectedIntern.mobileNo}</p>
                <p>Branch: {selectedIntern.branch}</p>
                <p>Gender: {selectedIntern.gender}</p>
                <p>Paasout Year: {selectedIntern.passout}</p>
                <p>
                  <b>Bank Account Details:</b>
                </p>
                <p>Bank Account Number: {selectedIntern.bankAcntNo}</p>
                <p>Account Holder Name: {selectedIntern.acntHolderName}</p>
                <p>Bank Branch Name: {selectedIntern.bankBranch}</p>
              </CardBody>
            </Card>
          )}
        </ModalBody>
        <ModalFooter>
          {selectedIntern && <Link to={`/api/edit-intern/${selectedIntern._id}`} className="link">
            <Button className="btn btn-warning">Edit</Button>
          </Link>}
          <Button color="danger" onClick={() => handleDelete(selectedIntern._id)}>
            Delete
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default GetIntern;
