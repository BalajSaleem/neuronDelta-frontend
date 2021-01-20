/*! Developed by Alinon */
import React from "react";
import { Link } from "react-router-dom";
import { reactLocalStorage } from 'reactjs-localstorage';
import axios from 'axios';
import { constants } from '../../constants.js';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Table,
  Container,
  Row,
  Col,
  Spinner,
  Modal
} from "reactstrap";

import EmptyHeader from "components/Manager/Headers/EmptyHeader.js";

class SuperAdminStandards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      standards: [],
      loading: false,
      addModal: false,
      name: "",
      desc: "",
      version: null,
    };
  }

  componentDidMount() {
    axios.post(constants["apiUrl"] + '/admin/getStandards')
      .then((res) => {
        let data = res.data;
        this.setState({
          standards: data.standards,
          loading: false
        })
      })
      .catch((error) => {
        console.warn(JSON.stringify(error));
      });
  }

  openAddModal = () => {
    this.setState({
      addModal: true,
    })
  }

  closeAddModal = () => {
    this.setState({
      addModal: false,
    })
  }

  handleName = () => {

  }

  handleDesc = () => {

  }

  handleVersion = () => {

  }

  handleAdd = () => {

  }

  render() {
    return (
      <>
        <EmptyHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row className="mt-5">
            <Col xl>
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Current Standards</h3>
                    </div>
                    <div className="col text-right">
                      <Button color="success" onClick={() => this.openAddModal()} size="md">
                        Add Standard
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
                {this.state.loading ?
                  <CardBody>
                    <div style={{ borderColor: 'black' }} className="text-center">
                      <Spinner st color="primary" />
                    </div>
                  </CardBody>
                  :
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Article Count</th>
                        <th scope="col">Description</th>
                        <th scope="col">Version</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.standards.map((standard, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">
                              {standard.name}
                            </th>
                            <td>
                              {standard.articleCount ? standard.articleCount : "-"}
                            </td>
                            <td style={{ maxWidth: 150 }}>
                              <text style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
                                {standard.description ? standard.description : '-'}
                              </text>
                            </td>
                            <td>
                              {standard.version}
                            </td>
                          </tr>
                        )
                      })}

                    </tbody>
                  </Table>
                }
              </Card>
              <Modal
                className="modal-dialog-centered"
                isOpen={this.state.addModal}
                defaultValue={this.state.addModal}
                toggle={() => this.closeAddModal()}
              >
                <div className="modal-header">
                  <h2 className="modal-title" id="assignModelLabel">
                    Add New Standard
                                </h2>
                  <button
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={() => this.closeAddModal()}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label for="recipient-name" defaultValue={this.state.name} class="col-form-label" >Name:</label>
                      <input type="text" class="form-control" id="recipient-name" onChange={this.handleName}></input>
                    </div>
                    <div class="form-group">
                      <label for="message-text" class="col-form-label" defaultValue={this.state.desc}>Description:</label>
                      <textarea class="form-control" id="message-text" id="message-text" onChange={this.handleDesc}></textarea>
                    </div>
                    <div className="form-group">
                      <label for="recipient-version" defaultValue={this.state.version} class="col-form-label" >Version</label>
                      <input type="number" class="form-control" id="recipient-version" onChange={this.handleVersion}></input>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <Button color="secondary" data-dismiss="modal" type="button" onClick={() => this.closeAddModal()}>
                    Cancel
                                                </Button>
                  <Button color="success" type="button" onClick={() => this.handleAdd()}>
                    Add
                                                </Button>
                </div>
              </Modal>

            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default SuperAdminStandards;
