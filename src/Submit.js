import React from "react";


const Submit = props => {
    const { name } =
        (props.location && props.location.state) || {};
    return (
        <center>
            <div style={{ position: "absolute", top: "200px", left: "405px" }}>
                <h1>Your order has been confirmed</h1>
                <h1>Thank you {name} for your order.</h1>

            </div>
        </center>
    );
};

export default Submit;
