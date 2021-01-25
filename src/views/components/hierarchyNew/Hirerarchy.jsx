import React, { useEffect,useState } from "react";
import PropTypes from "prop-types";
import "./Hiererachy.css";
const propTypes = {
    nodeData: PropTypes.object.isRequired
};

const Hirerarchy = ({nodeData}) => {
    const [text,setText] = useState('')
    // const selectNode = () => {
    //     // alert("Hi All. I'm " + nodeData.name + ". I'm a " + nodeData.title + ".");
    // };

    const shortLength = (val) => {
        let length = val.length;
        if(length<14){
            return `${val.substr(0,1).toUpperCase()}${val.slice(1).toLowerCase()}`;
        }else{
            return `${val.substr(0,1).toUpperCase()}${val.substr(1,13).toLowerCase()}`;
        }
    }
    
    useEffect(()=>{
        console.log(nodeData,"nodeDataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    },[])

    return (
        <div className={'finalDiv'}>
            
            {/* <img alt="" width="100px" height="70px" src={nodeData.img}/>   */}
            <div class="tooltip"className="position2"><span class={"fonts2"}>{`${nodeData.designation}`}<br/>{`${nodeData.roleName}`}</span><br/></div>

            <div class="tooltip"className="fullname2"><span class={"font3"}>{nodeData.department}</span></div>
            
            {/* <div class="tooltip"className="position4"><span class={"font1"}>{shortLength(`${nodeData.designation}`)} - {`${shortLength(nodeData.roleName)}`}</span><br /><span class={"font2"}>{`${shortLength(nodeData.department)}`}</span><span class="tooltiptext">{nodeData.designation} - {nodeData.roleName} - {nodeData.department}</span></div> */}
            {/* <div className="position4"><b>{`${shortLength(nodeData.department)}`}</b></div> */}
            {/* <div className="fullname4"><b>{nodeData.title}</b></div> */}
            {/* <span class="tooltiptext">Tooltip text</span> */}
            {/* <div className="department4"><b>{nodeData.city}</b></div> */}
            {/* <span class="tooltiptext">Tooltip text</span> */}
            {/* <div className="position4"><b>{nodeData.name}</b></div> */}
            {/* <div className="department4">{nodeData.roleName}</div>
            <div className="fullname4">{nodeData.typeOfOffice}</div>
            <div className="department4">{nodeData.department}</div>
            <div className="department4">{nodeData.designation}</div>
            <div className="department4">{nodeData.title}</div>
            <div className="department4">{nodeData.city}</div>
            <div className="department4">{nodeData.state}</div>
            <div className="department4">{nodeData.area}</div>
            <div className="department4">{nodeData.dccDescription}</div>
            <div className="department4">{nodeData.reportingTo}</div> */}
            
        </div>

    );
};

Hirerarchy.propTypes = propTypes;

export default Hirerarchy;
