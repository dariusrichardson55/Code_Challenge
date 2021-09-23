import React, { Component } from 'react';
import Ford_Fiesta from '../src/Ford-Fiesta.jpeg';
import VW_Golf from '../src/VW-Polo.jpeg';
import Audi_Q3 from '../src/Audi-Q3.jpeg';
import { Button } from "react-bootstrap";
import './Car_Select.css';

export default class Car extends Component {

    constructor(props) {
        super(props);

        this.state_Ford = {
            Make: "Make: Ford",
            Model: "Model: Fiesta",
            Number_of_doors: "Number of doors: " + 3,
            Number_of_seats: "Number of seats: " + 5,
            Colour: "Colour: silver",
            Price: "Cost: £" + 60 + " per day"
        };
        this.state_VW = {
            Make: "Make: VW",
            Model: "Model: Golf",
            Number_of_doors: "Number of doors: " + 5,
            Number_of_seats: "Number of seats: " + 5,
            Colour: "Colour: red",
            Price: "Cost: £" + 80 + " per day"
        };
        this.state_Audi = {
            Make: "Make: Audi",
            Model: "Model: Q3",
            Number_of_doors: "Number of doors: " + 5,
            Number_of_seats: "Number of seats: " + 5,
            Colour: "Colour: white",
            Price: "Cost: £" + 80 + " per day"
        };

        this.state = {
            isToggleOn1: false,
            isToggleOff1: true,
        }

        this.state = {
            isToggleOn2: false,
            isToggleOff2: true,
        }

        this.state = {
            isToggleOn3: false,
            isToggleOff3: true,
        }

        this.changeMessage = this.changeMessage.bind(this);
        this.changeMessage2 = this.changeMessage2.bind(this);
        this.changeMessage3 = this.changeMessage3.bind(this);
    }

    changeMessage(e) {
        this.setState(state => ({
            isToggleOn1: !state.isToggleOn1,
            isToggleOn2: state.isToggleOff2,
            isToggleOn3: !state.isToggleOff3,
        }));
    }

    changeMessage2(e) {
        this.setState(state => ({
            isToggleOn2: !state.isToggleOn2,
            isToggleOn1: state.isToggleOff1,
            isToggleOn3: !state.isToggleOff3,
        }));
    }

    changeMessage3(e) {
        this.setState(state => ({
            isToggleOn3: !state.isToggleOn3,
            isToggleOn2: state.isToggleOff2,
            isToggleOn1: state.isToggleOff1,
        }));
    }

    LocalstorageFord = () => {
        localStorage.setItem("Customer's car to hire", JSON.stringify(this.state_Ford));
    }

    LocalstorageVW = () => {
        localStorage.setItem("Customer's car to hire", JSON.stringify(this.state_VW));
    }

    LocalstorageAudi = () => {
        localStorage.setItem("Customer's car to hire", JSON.stringify(this.state_Audi));
    }

    render() {
        return (
            <>

                <div className="Cars_Container">

                    {/* Ford Fiesta  */}
                    <h1 style={{ position: "absolute", left: "155%", bottom: "440px", width: "100%" }}>Select a car to hire </h1>
                    <div className="Container">
                        <img src={Ford_Fiesta} className="Ford_Fiesta_Picture" alt="Ford_Fiesta_Picture">
                        </img>
                        <h5>{this.state_Ford.Make}</h5>
                        <h5>{this.state_Ford.Model}</h5>
                        <h5>{this.state_Ford.Number_of_doors}</h5>
                        <h5>{this.state_Ford.Number_of_seats}</h5>
                        <h5>{this.state_Ford.Colour}</h5>
                        <h5>{this.state_Ford.Price}</h5>
                        <Button onClick={(e) => { this.changeMessage(e); this.LocalstorageFord() }} className="Select">{this.state.isToggleOn1 ? "Selected" : "Select Ford"}</Button>
                    </div>

                    {/* VW Golf */}
                    <div className="Container_2">
                        <img src={VW_Golf} className="VW_Golf_Picture" alt="VW_Golf_Picture">
                        </img>
                        <h5>{this.state_VW.Make}</h5>
                        <h5>{this.state_VW.Model}</h5>
                        <h5>{this.state_VW.Number_of_doors}</h5>
                        <h5>{this.state_VW.Number_of_seats}</h5>
                        <h5>{this.state_VW.Colour}</h5>
                        <h5>{this.state_VW.Price}</h5>
                        <Button onClick={(e) => { this.changeMessage2(e); this.LocalstorageVW() }} className="Select">{this.state.isToggleOn2 ? "Selected" : "Select VW"}</Button>
                    </div>

                    {/* Audi Q3 */}
                    <div className="Container_3">
                        <img src={Audi_Q3} className="Audi_Q3_Picture" alt="Audi_Q3_Picture">
                        </img>
                        <h5>{this.state_Audi.Make}</h5>
                        <h5>{this.state_Audi.Model}</h5>
                        <h5>{this.state_Audi.Number_of_doors}</h5>
                        <h5>{this.state_Audi.Number_of_seats}</h5>
                        <h5>{this.state_Audi.Colour}</h5>
                        <h5>{this.state_Audi.Price}</h5>
                        <Button onClick={(e) => { this.changeMessage3(e); this.LocalstorageAudi() }} className="Select">{this.state.isToggleOn3 ? "Selected" : "Select Audi"}</Button>

                    </div>
                </div>

            </>
        )
    }
}

