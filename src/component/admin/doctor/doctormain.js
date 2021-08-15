import React, {useState, useEffect} from 'react'
import DoctorList from './doctorlist'
import DoctorAdd from './doctoradd'
import DoctorView from './doctorview'
import DoctorEdit from './doctoredit'
import axios from 'axios'
import Alert from 'react-popup-alert'

function Doctormain() {

    const [doctorviews, setdoctorviews] = useState({doctoradd:false, doctoredit:false,doctorview:false,doctorlist:false})
    const [doctorlisting, setdoctorlisting] = useState([])
    const [doctorselect, setdoctorselect] = useState({})
    const [doctorfields, setdoctorfields] = useState([])
    const [doctorlistingSort, setdoctorlistingSort] = useState([])
    const [doctornew, setdoctornew] = useState({first_name:'',last_name:'',email:'',phone:'',address:'',date_of_birth:'',education:'',description:'',field:''})
    
    const [alert, setAlert] = React.useState({
        type: 'error',
        text: 'This is a alert message',
        show: false
      })



    useEffect(() => {
            closeDoctorViews()
           
            openDoctorList()
            

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

    const openDoctorList = () =>{
        closeDoctorViews()
        getDoctorList()
        clearDoctorFields()
        let cdoctorviews = doctorviews
        cdoctorviews.doctorlist = true
        setdoctorviews({...doctorviews, cdoctorviews})
    }

    const openDoctorEdit = () =>{
        closeDoctorViews()
        let cdoctorviews = doctorviews
        cdoctorviews.doctoredit = true
        setdoctorviews({...doctorviews, cdoctorviews})
    }

    const openDoctorView = (doctor) =>{
        closeDoctorViews()
        setdoctorselect(doctor)
        let cdoctorviews = doctorviews
        cdoctorviews.doctorview = true
        setdoctorviews({...doctorviews, cdoctorviews})
    }

    const openDoctorAdd = () =>{
        closeDoctorViews()
        getFieldList()
        let cdoctorviews = doctorviews
        cdoctorviews.doctoradd = true
        setdoctorviews({...doctorviews, cdoctorviews})

    }


    const getDoctorList = () =>{
        
        axios.get('http://127.0.0.1:8000/api/doctor/all')
        .then((res)=>{console.log(res.data)
        setdoctorlisting(res.data)
        setdoctorlistingSort(res.data)        
        
        })
        .catch((error)=>console.log(error))

    }

    const getFieldList = () =>{

        axios.get('http://127.0.0.1:8000/api/speciality/all')
        .then((res)=>{console.log(res.data)
        setdoctorfields(res.data)
        })
        .catch((error)=>console.log(error))

    }

    const addDoctorNewDatabase = () =>{

        axios.post('http://127.0.0.1:8000/api/doctor/create',
        {
            "first_name": doctornew.first_name,
            "last_name": doctornew.last_name,
            "email": doctornew.email,
            "phone": doctornew.phone,
            "address": doctornew.address,
            "date_of_birth": doctornew.date_of_birth,
            "field": doctornew.field,
            "education":doctornew.education,
            "description":doctornew.description
           
        }
        
        )
        .then(res=>{console.log(res.data)
        openDoctorList()

        
        })
        .catch(error=>console.log(error))

    }

    const clearDoctorFields = () =>{
        let cdoctornew = doctornew
        cdoctornew.first_name = ''
        cdoctornew.last_name = ''
        cdoctornew.email = ''
        cdoctornew.phone = ''
        cdoctornew.address = ''
        cdoctornew.date_of_birth = ''
        cdoctornew.education = ''
        cdoctornew.description = ''
        cdoctornew.field = ''

        setdoctornew({...doctornew,cdoctornew})
               
    }

    const addDoctorhandleFields= (event) =>{

        console.log(event.target)
        const fieldname = event.target.name
        const value = event.target.value
        let cdoctornew = doctornew
        console.log(fieldname)

        switch (fieldname) {
                        case "first_name":
                                            cdoctornew.first_name = value
                                            setdoctornew({...doctornew, cdoctornew})
                            break;
                        case "last_name":
                                            cdoctornew.last_name = value                                          
                                            setdoctornew({...doctornew, cdoctornew})
                          break;
                        case "last_name":
                                            cdoctornew.last_name = value                                          
                                            setdoctornew({...doctornew, cdoctornew})
                            break;
                        case "email":
                                            cdoctornew.email = value                                          
                                            setdoctornew({...doctornew, cdoctornew})
                            break;
                        case "phone":
                                            cdoctornew.phone = value                                          
                                            setdoctornew({...doctornew, cdoctornew})
                        break;
                        case "date_of_birth":
                                            cdoctornew.date_of_birth = value                                          
                                            setdoctornew({...doctornew, cdoctornew})
                        break;
                        case "field":
                                            cdoctornew.field = value                                    
                                            setdoctornew({...doctornew, cdoctornew})
                        break;
                        case "education":
                                            cdoctornew.education = value                                    
                                            setdoctornew({...doctornew, cdoctornew})
                         break;
                        case "address":
                                            cdoctornew.address = value                                          
                                            setdoctornew({...doctornew, cdoctornew})
                        break;
                        case "description":
                                            cdoctornew.description = value                                          
                                            setdoctornew({...doctornew, cdoctornew})
                        break;
                        


                    
                        default:
                            break;
        }

        console.log('Good')
    }


    function onCloseAlert() {
        setAlert({
          type: '',
          text: '',
          show: false
        })
      }
    
      function onShowAlert(type) {
        alert("Login was unsuccessful ")
      }


    return (
        <div>
            <h1>Doctors</h1>
            <div onClick={openDoctorAdd} className='btn btn-primary m-2'>Add</div>
            <div onClick={openDoctorEdit}  className='btn btn-success m-2'>Edit</div>
            <div onClick={openDoctorView}  className='btn btn-warning m-2'>View</div>
            <div onClick={openDoctorList}  className='btn btn-danger m-2'>List</div>

            

    
            
            {doctorviews.doctoradd && <DoctorAdd doctorfields={doctorfields} openDoctorList={openDoctorList} addDoctorhandleFields={addDoctorhandleFields} doctornew={doctornew} addDoctorNewDatabase={addDoctorNewDatabase}/>}
            {doctorviews.doctorlist && <DoctorList doctorlistingSort={doctorlistingSort}  openDoctorView={openDoctorView}/>}
            {doctorviews.doctorview && <DoctorView doctorselect={doctorselect} openDoctorList={openDoctorList}/>}
            {doctorviews.doctoredit && <DoctorEdit/>}

       
          

        </div>
    )
}

export default Doctormain
