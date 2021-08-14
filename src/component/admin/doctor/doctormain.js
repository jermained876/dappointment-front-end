import React, {useState, useEffect} from 'react'

function Doctormain() {

    const [doctorviews, setdoctorviews] = useState({doctoradd:false, doctoredit:false,doctorview:false,doctorlist:false})

    useEffect(() => {
            closeDoctorViews()

        return () => {
           
        }
    }, [])


    const closeDoctorViews = () =>{

        let cdoctorviews = doctorviews
        cdoctorviews.doctoradd = false
        cdoctorviews.doctoredit = false
        cdoctorviews.doctorview = false
        cdoctorviews.doctorlist = false
        setdoctorviews({...doctorviews, cdoctorviews})
    }


    return (
        <div>
            <h1>Doctor 3</h1>
            
        </div>
    )
}

export default Doctormain
