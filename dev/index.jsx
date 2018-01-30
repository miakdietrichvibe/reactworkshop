import React, { Component } from "react";
import ReactDOM from "react-dom";

require("./site.scss");


const getUserInfo = () =>
    ({
        firstName: "Mia",
        lastName: "Dietrich",
    });

function HelloWorld (props) {
    return (
        <div>Hello {props.user.firstName} {props.user.lastName}!</div>
    )
}

var me = { firstName: "Mia", lastName: "Dietrich"}

ReactDOM.render(
    <HelloWorld user={getUserInfo()} />,
    document.querySelector("#container")
);



