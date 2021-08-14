import React from 'react'
import './doctorlist.css'
import Switch from '@material-ui/core/Switch';


function doctorlist() {
    return (
        <div class='container'>   

                                    <div class='row'>

                                        <div class='col-md-4 offset-md-8'>
                                                        <div class="input-group">
                                                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                                                        aria-describedby="search-addon" />
                                                    <button type="button" class="btn btn-outline-primary">search</button>
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
                                <th scope="col">Speciality</th>
                                <th scope="col">Email</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>

                                <td>
                                                        <Switch
                                checked='true'
                             
                                color="primary"
                                name="checkedB"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />    
                                </td>

                                <td>Dr Roger Brown</td>
                                <td>test@gmail.com</td>
                                <td>General</td>
                                <td>949-5555</td>
                                <td>
                                   
                                    <button type="button" class="btn btn-warning btn-sm  px-3">
                                     Edit
                                    </button>
                                </td>
                                </tr>
                                
                            </tbody>
                            </table>

                            </div>

                    
        </div>
    )
}

export default doctorlist
