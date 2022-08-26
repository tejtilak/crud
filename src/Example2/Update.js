import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState({
        firstName: "",
        lastName: "",
        phoneNo: ""
    })

    const { firstName, lastName, phoneNo } = name;

    const change = (e) => {
        setName({ ...name, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        userName();
    },[])

    const userName = async () => {
        const result = await axios.get(`http://localhost:5002/name/${id}`)
        setName(result.data)
    }

    const submit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:5002/name/${id}`, name);
        alert('updated successfully')
        navigate('/')
    }
    return (
        <div>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Update A User</h2>
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

                            <button className="btn btn-primary btn-block form">Update a User</button>
                        </form>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Update