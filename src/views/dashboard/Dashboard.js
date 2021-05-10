import React, { lazy } from 'react'





const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))


const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown />
     
      {/* <WidgetsBrand withCharts/> */}

      
    </>
  )
}

export default Dashboard
