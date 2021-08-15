
import './doctorlist.css'
import Switch from '@material-ui/core/Switch';
import React, { Component } from 'react';

class Doctorlist extends Component {
    state = {  }
    render() { 

        const {doctorlistingSort, openDoctorView} = this.props

        return ( 
            <div class='container'>   

            
            
                           

                

                                    <div class='row'>

                                        <div class='col-md-4 offset-md-8'>
                                                        <div class="input-group">
                                                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                                                        aria-describedby="search-addon" />
                                                    <button type="button" class="btn btn-outline-primary">search3</button>
                                                    </div>
                                        </div>

                                    </div>
                                  

                                   


                            <div class=' dtable mt-5'>
                            <table class="table align-middle">
                            <thead>
                                <tr class='table-primary'>
                                <th scope="col">#</th>
                                <th scope="col">Active</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Speciality</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>


                            {doctorlistingSort.map((doctor,index)=>

                                <tr>
                                <th scope="row">{index+1}</th>

                                <td>
                                                        <Switch
                                checked='true'
                             
                                color="primary"
                                name="checkedB"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />    
                                </td>

                                <td>{doctor.first_name} {doctor.last_name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.field.name}</td>
                                <td>{doctor.phone}</td>
                                <td>
                                   
                                    <button type="button" class="btn btn-primary btn-sm  px-3" onClick={()=>openDoctorView(doctor)}>
                                     View
                                    </button>
                                </td>
                                </tr>
                            )}
                                
                            </tbody>
                            </table>

                            </div>

                    
        </div>

         );
    }
}



export default Doctorlist;