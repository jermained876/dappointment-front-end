import React from 'react'
import './doctorform.css'
import TextField from '@material-ui/core/TextField'





function Doctorform() {

   
    return (
        <div>
           
           <div className="row mt-5 col-md-6 offset-md-3">
                <div className="col-md-12 mb-3  ">

                  <div className='row'>
                  <div className="col-lg-6">
                        <div className="form-group">
                            <label>First Name</label>  
                            <input type="text"  name='Album-Name' className="form-control filter-input" placeholder="First Name" />
                        </div>
                   </div>

                   <div className="col-lg-6">
                        <div className="form-group">
                            <label>Last Name </label>  
                            <input type="text"  name='Album-Name' className="form-control filter-input" placeholder="Last Name" />
                        </div>
                   </div>
                   </div>

                </div>

                <div className="col-md-12 mb-3  ">

                    <div className='row'>
                    <div className="col-lg-6">
                          <div className="form-group">
                              <label>Email</label>  
                              <input type="text"  name='Album-Name' className="form-control filter-input" placeholder="Email" />
                          </div>
                    </div>

                    <div className="col-lg-6">
                          <div className="form-group">
                              <label>Phone </label>  
                              <input type="text"  name='Album-Name' className="form-control filter-input" placeholder="Phone" />
                          </div>
                    </div>
                    </div>

                    </div>


                    <div class="form-group">
                    <label for="exampleFormControlTextarea1">Address:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>



                  <div className='row'>

                  <div className="col-md-6 mt-5">
                  
                    <TextField
                    id="date"
                    label="Date Of Birth"
                    type="date"
                    name='Album-Date'
                    defaultValue=""
                  
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
    
                    </div>


                    <div className="col-md-6  ">
                    <div className="form-group m-4">
                        <label classNameName=''>Speciality</label>  
                        <select   className="custom-select mt-4 " name='Album-Type'>
                        <option value="" disabled selected>Select Event Type</option>
                        
                        <option key='{item.id}'  value='{item.id}'>General</option>
                            
                       
                        
                        </select>

                    </div>
                </div>


                  </div>

                  
                        

                  <div class="form-group mt-4">
                <label for="exampleFormControlTextarea1">Qualifications:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>


               


                <div class="form-group mt-5">
                <label for="exampleFormControlTextarea1">About:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>

               
         



            </div>

          <div className='container'>

                <button className='btn btn-warning mt-5' >Cancel</button>

            <div className='float-end'>
           
            <button className='btn btn-success mt-5' >Update</button>
            <button className='btn btn-success mt-5' >SAVE AND ADD</button>
            
           
            </div>

            </div>
           


            
        </div>
    )
}

export default Doctorform





