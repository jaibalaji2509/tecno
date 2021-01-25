import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
const propTypes = {
    nodeData: PropTypes.object.isRequired
};

const EmployeeHierarchy = ({ nodeData }) => {
    const [text, setText] = useState('')
    // const selectNode = () => {
    //     // alert("Hi All. I'm " + nodeData.name + ". I'm a " + nodeData.title + ".");
    // };

    const shortLength = (val) => {
        let length = val.length;
        if (length < 10) {
            return `${val.substr(0, 1).toUpperCase()}${val.slice(1).toLowerCase()}`;
        } else {
            return `${val.substr(0, 1).toUpperCase()}${val.substr(1, 9).toLowerCase()}...`;
        }
    }

    useEffect(() => {
        console.log(nodeData, "nodeDataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    }, [])

    return (
        <div className={'finalDiv'}>
            <div className="fullname4"><b><span class={'image'}><img alt="" width="50px" height="30px" src={nodeData.profileImage?nodeData.profileImage:"https://ypard.net/sites/default/files/styles/user_thumbnail/public/default_images/user-image.png?itok=YIi6mA1m"}/></span><br /><span class={"font-4"}>{`${nodeData.employeeName}`}</span></b></div>
            <div class="tooltip"className="position4"><span class={"font1"}>{`${nodeData.designation}`}<br/>{`${nodeData.roleName}`}</span><br/></div>   
            <div className="fullname5"><span class={"font3"}>{`${nodeData.department}`}</span><br/></div>
            {/* <div className="department4"><b>{`${shortLength(nodeData.city)}`}</b></div> */}
        </div>

    );
};

EmployeeHierarchy.propTypes = propTypes;

export default EmployeeHierarchy;
