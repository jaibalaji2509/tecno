import React from "react";
import PropTypes from "prop-types";
import "./RolesHierarchy.css";
// import Emp1 from  "../../../views/images/Emp1.png";
const propTypes = {
    nodeData: PropTypes.object.isRequired
};

const RolesHierarchy = ({ nodeData }) => {
    const selectNode = () => {
        // alert("Hi All. I'm " + nodeData.name + ". I'm a " + nodeData.title + ".");
    };

    return (
        <div>
           {/* <img width="100px" height="70px" src={Emp1} alt={"emoji"}/>  */}
            <div className="position2"><b>{nodeData.title}</b></div>
            <div className="department2">{nodeData.role}</div>
            <div className="fullname2">{nodeData.name}</div>
        </div>
    );
};

RolesHierarchy.propTypes = propTypes;

export default RolesHierarchy;
