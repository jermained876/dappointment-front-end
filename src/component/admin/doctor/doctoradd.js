import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'


class Doctoradd extends Component {
    state = {  }
    render() { 

        const {doctorfields,addDoctorhandleFields,doctornew,addDoctorNewDatabase,openDoctorList} = this.props

        return ( 
                <div>
                                        <h2>Add 3</h2> 

                                        <button onClick={()=>console.log(doctornew)} className='btn btn-info'>Check Data</button>
                                    
                                    <div class="container mt-3">
                        <div class="card p-3 text-center">
                            <div class="d-flex flex-row justify-content-center mb-3">
                                <div class="image"> <img src="https://i.imgur.com/hczKIze.jpg" class="rounded-circle"/> <span><i class='bx bxs-camera-plus'></i></span> </div>
                                
                            </div>
                            <h4>Add Profile</h4>
                            <div class="row">
                                <div class="col-md-6 mt-3">
                                    <div class="inputs"> <label>First Name</label> <input name="first_name" value={doctornew.first_name} onChange={(Event)=>addDoctorhandleFields(Event)} class="form-control" type="text" placeholder="First Name"/> </div>
                                </div>
                                <div class="col-md-6 mt-3">
                                    <div class="inputs"> <label>Last Name</label> <input name="last_name" value={doctornew.last_name} onChange={(Event)=>addDoctorhandleFields(Event)} class="form-control" type="text" placeholder="Last Name"/> </div>
                                </div>
                                <div class="col-md-6 mt-3">
                                    <div class="inputs"> <label>Email</label> <input name="email" value={doctornew.email} onChange={(Event)=>addDoctorhandleFields(Event)} class="form-control" type="text" placeholder="Email"/> </div>
                                </div>
                                <div class="col-md-6 mt-3">
                                    <div class="inputs"> <label>Phone</label> <input name="phone" value={doctornew.phone} onChange={(Event)=>addDoctorhandleFields(Event)} class="form-control" type="text" placeholder="Phone"/> </div>
                                </div>
                                <div class="col-md-6 mt-3">
                                    <div class="inputs"> 
                                    
                                    <TextField
                                    id="date"
                                    label="Date of Birth"
                                    type="date"
                                    name='date_of_birth'
                                    defaultValue=""
                                    onChange={(Event)=>addDoctorhandleFields(Event)}
                                    
                                    InputLabelProps={{
                                    shrink: true,
                                    }}

                                    

                                />
                                    
                                    
                                    
                                     </div>
                                </div>
                                <div class="col-md-6 mt-3">
                                    
                                        <div class="inputs"> <label>Specialty</label>

                                            <select class="form-select" name='field' onChange={(Event)=>addDoctorhandleFields(Event)}  aria-label="Default select example">
                                                <option selected>Please select specialty</option>
                                                {doctorfields.map(field=><option key={field.id} value={field.slug}>{field.name}</option>)}
                                               
                                                </select>
                                        </div>

                                    </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12">
                                    <div class="about-inputs"> <label>Qualifications</label> <textarea name="education" value={doctornew.education} onChange={(Event)=>addDoctorhandleFields(Event)} class="form-control" type="text" placeholder="Address"> </textarea> </div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12">
                                    <div class="about-inputs"> <label>Address</label> <textarea name="address" value={doctornew.address} onChange={(Event)=>addDoctorhandleFields(Event)} class="form-control" type="text" placeholder="Address"> </textarea> </div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12">
                                    <div class="about-inputs"> <label>About</label> <textarea name="description" value={doctornew.description} onChange={(Event)=>addDoctorhandleFields(Event)} class="form-control" type="text" placeholder="Tell us about yourself"> </textarea> </div>
                                </div>
                            </div>
                            <div class="mt-3 gap-2 d-flex justify-content-end"> <button onClick={openDoctorList} class="px-3 btn btn-sm btn-outline-primary">Cancel</button> <button onClick={addDoctorNewDatabase} class="px-3 btn btn-sm btn-primary">Add</button> </div>
                        </div>
                    </div>


                </div>

         );
    }
}
 
export default Doctoradd;