import React, { Component } from 'react';

class Doctoredit extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                   <h2>Edit 1</h2> 
                   
                   <div class="container mt-3">
    <div class="card p-3 text-center">
        <div class="d-flex flex-row justify-content-center mb-3">
            <div class="image"> <img src="https://i.imgur.com/hczKIze.jpg" class="rounded-circle"/> <span><i class='bx bxs-camera-plus'></i></span> </div>
            <div class="d-flex flex-column ms-3 user-details">
                <h4 class="mb-0">Zenda Grace</h4>
                <div class="ratings"> <span>4.0</span> <i class='bx bx-star ms-1'></i> </div> <span>Pro Member</span>
            </div>
        </div>
        <h4>Edit Profile</h4>
        <div class="row">
            <div class="col-md-6 mt-3">
                <div class="inputs"> <label>First Name</label> <input class="form-control" type="text" placeholder="First Name"/> </div>
            </div>
            <div class="col-md-6 mt-3">
                <div class="inputs"> <label>Last Name</label> <input class="form-control" type="text" placeholder="Last Name"/> </div>
            </div>
            <div class="col-md-6 mt-3">
                <div class="inputs"> <label>Email</label> <input class="form-control" type="text" placeholder="Email"/> </div>
            </div>
            <div class="col-md-6 mt-3">
                <div class="inputs"> <label>Phone</label> <input class="form-control" type="text" placeholder="Phone"/> </div>
            </div>
            <div class="col-md-6 mt-3">
                <div class="inputs"> <label>Date of Birth</label> <input class="form-control" type="text" placeholder="Date of Birth"/> </div>
            </div>
            <div class="col-md-6 mt-3">
                
                    <div class="inputs"> <label>Specialty</label>

                        <select class="form-select" aria-label="Default select example">
                            <option selected>Please select specialty</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                    </div>

                </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-12">
                <div class="about-inputs"> <label>Address</label> <textarea class="form-control" type="text" placeholder="Address"> </textarea> </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-12">
                <div class="about-inputs"> <label>About</label> <textarea class="form-control" type="text" placeholder="Tell us about yourself"> </textarea> </div>
            </div>
        </div>
        <div class="mt-3 gap-2 d-flex justify-content-end"> <button class="px-3 btn btn-sm btn-outline-primary">Cancel</button> <button class="px-3 btn btn-sm btn-primary">Save</button> </div>
    </div>
</div>


            </div>

         );
    }
}
 
export default Doctoredit;
