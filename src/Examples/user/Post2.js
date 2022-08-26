import axios from 'axios';
import React, { useState } from 'react';

const Post2 = () => {
    const [user, setUser] = useState({
        firstName: " ",
        lastName: " ",
    })

    const { firstName, lastName } = user;

    const change = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5001/user", user);
        alert("User Added Succesfully")
        console.log(user)
    }

    return (
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

                        <button className="btn btn-primary btn-block form">Add a User</button>
                    </form>
                </center>
            </div>
        </div>
    )
}

export default Post2;