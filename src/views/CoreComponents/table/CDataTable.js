import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";

//component - CoreUI / CTable
const CDataTable = (props) => {
  const [allItems, setAllItems] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    setAllItems(props.items);
    setChange(true);
  }, [props.items]);

  const duration = (day1, day2) => {
    const date1 = new Date(day1);
    const date2 = new Date(
      `${day2.slice(3, 4)}-${day2.slice(0, 2)}-${day2.slice(5, 9)}`
    );
    const diffTime = date2 - date1;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const onDayFilterChange = (val) => {
    setChange(true);
    if (val === 0) {
      setAllItems(props.items);
    } else {
      let yester = new Date(Date.now());
      yester.setDate(yester.getDate() - val);
      let newdata = props.items.filter((x, i) => {
        return duration(yester, x.createdAt) >= 0;
      });
      setAllItems(newdata);
    }
    setChange(true);
  };

  return (
    <React.Fragment>
      {change && (
        <DataTable
          {...props}
          items={allItems}
          onDayFilterChange={onDayFilterChange}
        />
      )}
    </React.Fragment>
  );
};
export default CDataTable;
