// we neeed this component to output the alert that we did with alert context and reducer
import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext'




const Alerts = () => {
  // use context and pass in AlertCOntext
  const alertContext = useContext(AlertContext)

  return (
    alertContext.alerts.length > 0 && alertContext.alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    ))
  )
}



export default Alerts;





