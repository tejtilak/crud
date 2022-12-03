import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = () => {
    const notify = () => toast.success('User added successfully');

    const [name, setName] = useState({
        firstName: "",
        lastName: "",
        phoneNo: ""
    })

    const { firstName, lastName, phoneNo } = name;

    const change = (e) => {
        setName({ ...name, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5002/name", name)
        // alert("user added successfully")
        console.log(name)
    }
    return (
        <div>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Add A User</h2>
                    <center>
                        <form onSubmit={submit}>
                            <div class="form-group">

                                <input type="text" class="form-control" placeholder="firstName" name='firstName' value={firstName} onChange={change} />
                            </div>
                            <div class="form-group">

                                <input type="text" class="form-control" placeholder="lastName" name='lastName' value={lastName} onChange={change} />
                            </div>

                            <div class="form-group">

                                <input type="text" class="form-control" placeholder="phoneNo" name='phoneNo' value={phoneNo} onChange={change} />
                            </div>

                            <button className="btn btn-primary btn-block form" onClick={notify}>Add a User</button>
                        </form>
                    </center>
                </div>
            </div>

            <ToastContainer />
        </div>
    )
}

export default Add