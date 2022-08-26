import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    let navigate = useNavigate()
    const { id } = useParams()
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
    })

    const { firstName, lastName } = user;

    const change = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async (e) => {
        const result = await axios.get(`http://localhost:5001/user/${id}`);
        setUser(result.data)
    }

    const submit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:5001/user/${id}`, user);
        alert("User Updated Succesfully")
        navigate('/')
    }
    return (
        <div>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Edit A User</h2>
                    <center>
                        <form onSubmit={submit}>
                            <div class="form-group">

                                <input type="text" class="form-control" placeholder="firstName" name='firstName' value={firstName} onChange={change} />
                            </div>
                            <div class="form-group">

                                <input type="text" class="form-control" placeholder="lastName" name='lastName' value={lastName} onChange={change} />
                            </div>

                            <button className="btn btn-primary btn-block form">Update User</button>
                        </form>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Edit