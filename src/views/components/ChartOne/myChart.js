import React, { Component } from "react";
import OrgChart from "@balkangraph/orgchart.js";

export default class myChart extends Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }

  // shouldComponentUpdate() {
  //   return false;
  // }

  componentDidMount() {
    this.chart = new OrgChart(this.divRef.current, {
      nodes: this.props.nodes,

      nodeBinding: {
        field_0: "name",
        field_1: "title",
      },
    });
  }
  

  render() {
    return(<div  id="tree" ref={this.divRef}></div>);
  }
}
