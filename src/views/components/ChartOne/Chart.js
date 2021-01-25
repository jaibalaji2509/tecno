import React, { Component } from "react";
import OrgChart from "./myChart";

export default class Chart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ height: "1000px"}}>
        <OrgChart
          nodes={[
            { id: 1, name: "Name1", title: "Tytle1" },
            { id: 2, pid: 1, name: "Name2", title: "Tytle2" },
            { id: 3, pid: 1, name: "Name3", title: "Tytle3" },
            { id: 4, pid: 1, name: "Name4", title: "Tytle4" },
            { id: 5, pid: 2, name: "Name5", title: "Tytle5" },
            { id: 6, pid: 3, name: "Name6", title: "Tytle6" },
            { id: 7, pid: 3, name: "Name7", title: "Tytle7" },
            { id: 8, pid: 4, name: "Name8", title: "Tytle8" },
            { id: 9, pid: 4, name: "Name9", title: "Tytle9" },
            { id: 10, pid: 4, name: "Name10", title: "Tytle10" },
            { id: 11, pid: 6, name: "Name11", title: "Tytle11" },
            { id: 12, pid: 7, name: "Name12", title: "Tytle12" },
            { id: 13, pid: 8, name: "Name13", title: "Tytle13" },
            { id: 14, pid: 8, name: "Name14", title: "Tytle14" },
            { id: "hkfghghhj", pid: 10, name: "Name15", title: "Tytle15" },
            { id: 16, pid: "hkfghghhj", name: "Name16", title: "Tytle16" },
          ]}
        />
      </div>
    );
  }
}
