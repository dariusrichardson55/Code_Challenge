import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Car from "./Car_Select";
import './Home.css';

export default class Home extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.state = {
            name: "",
            email: "",
            contact: "",
            startdate: "",
            enddate: "",
        };
    }
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };



    handleOnSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("Customer's contact information", JSON.stringify(this.state));
        this.props.history.push({
            pathname: "/submit",
            state: this.state,
        });
    };

    componentDidMount = () => {
        this.documentData = JSON.parse(localStorage.getItem("Customer's contact information"));

        if (localStorage.getItem("Customer's contact information")) {
            this.setState({
                name: this.documentData.name,
                email: this.documentData.email,
                contact: this.documentData.contact,
                startdate: this.documentData.startdate,
                enddate: this.documentData.enddate,
            })
        } else {

            this.setState({
                name: '',
                email: '',
                contact: '',
                startdate: '',
                enddate: '',
            });
        }
    }


    render() {
        return (

            <div className="Wrapper">
                <h1>Contact Form</h1>
                <Form className="Form_Layout" onSubmit={this.handleOnSubmit}>
                    <Form.Group controlId="name" className="Form_Layout">
                        <b><Form.Label>Name: </Form.Label></b>
                        <Form.Control
                            type="name"
                            placeholder="Enter name"
                            name="name"
                            onChange={this.handleInputChange}
                            value={this.state.name}
                        />

                    </Form.Group>
                    <Form.Group controlId="email" className="Form_Layout">
                        <b><Form.Label>Email: </Form.Label></b>
                        <Form.Control
                            type="email"
                            placeholder="Enter email address"
                            name="email"
                            onChange={this.handleInputChange}
                            value={this.state.email}
                        />
                    </Form.Group>
                    <Form.Group controlId="contact" className="Form_Layout">
                        <b><Form.Label>Contact Number: </Form.Label></b>
                        <Form.Control
                            type="tel"
                            placeholder="Enter contact number"
                            name="contact"
                            onChange={this.handleInputChange}
                            value={this.state.contact}
                        />
                    </Form.Group>
                    <Form.Group controlId="startdate" className="Form_Layout">
                        <b><Form.Label>Start date: </Form.Label></b>
                        <Form.Control
                            type="date"
                            placeholder="Enter start date"
                            name="startdate"
                            onChange={this.handleInputChange}
                            value={this.state.startdate}
                        />
                    </Form.Group>
                    <Form.Group controlId="enddate" className="Form_Layout">
                        <b><Form.Label>End date: </Form.Label></b>
                        <Form.Control
                            type="date"
                            placeholder="Enter end date"
                            name="enddate"
                            onChange={this.handleInputChange}
                            value={this.state.enddate}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="Submit" disabled={!this.state.name || !this.state.email || !this.state.contact || !this.state.startdate || !this.state.enddate}>
                        Submit
                    </Button>
                </Form>

                <Car />
            </div >
        );
    };
}
