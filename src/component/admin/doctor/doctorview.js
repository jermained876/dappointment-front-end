import React, { Component } from 'react';
import './doctorview.css'


class Doctorview extends Component {
    state = {  }
    render() { 

        const {doctorselect,openDoctorList} = this.props

        return ( 

            <div>

<div class="container mt-3">
    <div class="card p-3 text-center">
        <div class="d-flex flex-row justify-content-center mb-3">
           {doctorselect.main_img ? 
            <div class="image  profile-img"> <img src={doctorselect.main_img} class="rounded-circle"/> <span><i class='bx bxs-camera-plus'></i></span> </div> :
            <div class="image  profile-img"> <img src={process.env.PUBLIC_URL+'/images/default.jpg'} class="rounded-circle"/> <span><i class='bx bxs-camera-plus'></i></span> </div> 
            }



            <div class="d-flex flex-column ms-3 user-details">
                <h4 class="mb-0">{doctorselect.first_name} {doctorselect.last_name}</h4>
                <div class="ratings"> <i class='bx bx-star ms-1'></i> </div> <span>{doctorselect?.field?.name}</span>
            </div>
        </div>

        <div class="mt-3 gap-2 d-flex justify-content-between ">
             <button onClick={openDoctorList} class="px-3 btn btn-sm btn-outline-primary">Cancel</button> 
             <button class="px-3 float-end btn btn-sm btn-warning">Edit</button>
        </div>
        
        
        <div class="row mt-5">
                <div class="offset-md-3 col-md-6 bg-white px-3 mb-3 pb-3">
                   
                    <div class="d-flex align-items-center justify-content-between border-bottom">
                        <p class="py-2">Email</p>
                        <p class="py-2 text-muted">{doctorselect.email}</p>
                    </div>
                   
                    <div class="d-flex align-items-center justify-content-between border-bottom">
                        <p class="py-2">Phone</p>
                        <p class="py-2 text-muted">{doctorselect.phone}</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between border-bottom">
                        <p class="py-2">DOB</p>
                        <p class="py-2 text-muted">{doctorselect.date_of_birth}</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between border-bottom">
                        <p class="py-2">Qualifications</p>
                        <p class="py-2 text-muted">{doctorselect.education}</p>
                    </div>
                    <div class="">
                        <p class="py-2">Address</p>
                        <p class="py-2 text-muted">{doctorselect.address}</p>
                    </div>
                    <div class="">
                        <div class="py-2">About</div>
                        <p class="py-2 text-muted"> {doctorselect.description}</p>
                    </div>
                </div>
        </div>
        
      
    </div>
</div>

            
        </div>

         );
    }
}
 
export default Doctorview;

