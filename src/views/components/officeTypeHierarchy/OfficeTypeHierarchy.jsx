import React from "react";
import PropTypes from "prop-types";
import "./OfficeTypeHierarchy.css";

const propTypes = {
    nodeData: PropTypes.object.isRequired
};

const OfficeTypeHierarchy = ({ nodeData }) => {
    const selectNode = () => {
        // alert("Hi All. I'm " + nodeData.name + ". I'm a " + nodeData.title + ".");
    };
    
    return (
        <div>
            <div className="position"><b>{nodeData.office}</b></div>
            <div className="department">{nodeData.role}</div>
            <div className="fullname">{nodeData.name}</div>
        </div>
    );
};

OfficeTypeHierarchy.propTypes = propTypes;

export default OfficeTypeHierarchy;
