import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css'
import './burger.css'
import DoctorPanel from './doctor/doctormain'
import DashboardPanel from './dashboard/dashboardmain'
import PatientPanel from './patient/paitentadmin'
import SchedulePanel from './schedule/scheduleadmin'
import AppointmentPanel from './appointment/appointmentadmin'

function Dashboard() {

  const [panels, setpanels] = useState({doctorpanel:false, dashboardpanel:false, patientpanel:false,schedulepanel:false,appointmentpanel:false})


  const closeAllpanel = ()=>{

    let cpanel = panels

    panels.doctorpanel = false;
    panels.dashboardpanel = false;
    panels.patientpanel = false;
    panels.schedulepanel = false;
    panels.appointmentpanel = false;
    setpanels({...panels,cpanel})
     }


     const openDoctorpanel = ()=>{
         let cpanel = panels
        closeAllpanel()
        panels.doctorpanel = true;
        setpanels({...panels,cpanel})

     }

     const openDashboardpanel = ()=>{
      let cpanel = panels
      closeAllpanel()
      panels.dashboardpanel = true;
      setpanels({...panels,cpanel})
     }

     const openSchedulepanel = ()=>{
      let cpanel = panels
      closeAllpanel()
      panels.schedulepanel = true;
      setpanels({...panels,cpanel})
     }


        const openPatientpanel = ()=>{
          let cpanel = panels
          closeAllpanel()
          panels.patientpanel = true;
          setpanels({...panels,cpanel})

      }


      const openAppointmentpanel = ()=>{
        let cpanel = panels
        closeAllpanel()
        panels.appointmentpanel = true;
        setpanels({...panels,cpanel})
      }

      const testClick= ()=>{
        let cpanel = panels
        closeAllpanel()
        panels.doctorpanel = true;
        setpanels({...panels,cpanel})
        console.log('here we go2  ')
      }


      


    return (
      
        <div>

                    <nav  role="navigation">
                        <div id="menuToggle">
                            
                            <input type="checkbox"/>

                            <span></span>
                            <span></span>
                            <span></span>

                            <ul id="menu">
                                <li><a href="#">Dashboard</a></li>
                                <li><a href="#">Doctors</a></li>
                                <li><a href="#">Doctor Schedule</a></li>
                                <li><a href="#">Patient</a></li>
                                <li><a href="#">Appointment</a></li>
                            
                            </ul>
                        </div>
                    </nav>  


        <div class="main">

        <div class='dashboard'>
  
          <div class='dash-header'>
  
            <ion-icon name="happy-outline"></ion-icon>
  
            <h3>ADMIN</h3>  
          
          </div>
          
  
          <div class='links'>
            
  
  
             <div class={`link ${panels.dashboardpanel? 'linkclick':''} `} onClick={openDashboardpanel}>
              <div class='link-icon'><ion-icon name="speedometer-outline"></ion-icon> </div> 
              <p class='link-name'>Dashboard</p>
             </div>
  
              <div class={`link ${panels.doctorpanel? 'linkclick':''} `} onClick={openDoctorpanel}>
              <div class='link-icon'><ion-icon name="person-outline"></ion-icon> </div> 
              <p class='link-name'>Doctors</p>
             </div>
  
              <div class={`link ${panels.patientpanel? 'linkclick':''} `}  onClick={openPatientpanel}>
              <div class='link-icon'><ion-icon name="speedometer-outline"></ion-icon> </div> 
              <p class='link-name'>Patient  </p>
             </div>
  
              <div class={`link ${panels.schedulepanel? 'linkclick':''} `} onClick={openSchedulepanel}>
              <div class='link-icon'><ion-icon name="speedometer-outline"></ion-icon> </div> 
              <p class='link-name'>Doctor Schedule  </p>
             </div>
  
              <div class={`link ${panels.appointmentpanel? 'linkclick':''} `}  onClick={openAppointmentpanel}>
              <div class='link-icon'><ion-icon name="book-outline"></ion-icon> </div> 
              <p class='link-name'>Appointment  </p>
             </div>
      
          </div>
  
  
         
        </div>
  
  
        <div class='content'>
        

          {panels.dashboardpanel && <DashboardPanel/>}
          {panels.doctorpanel && <DoctorPanel/>}
          {panels.patientpanel && <PatientPanel />}
          {panels.schedulepanel && <SchedulePanel/>}
          {panels.appointmentpanel && <AppointmentPanel/>}
         
            


        </div>
  
  
  
  
    </div>

    </div>
    )
}

export default Dashboard
