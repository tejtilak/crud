import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link, useParams } from 'react-router-dom'

const View = () => {
    const [name, setName] = useState({
        firstName: "",
        lastName: "",
        phoneNo: ""
    })

    const { id } = useParams()
    useEffect(() => {
        userName()
    },[])

    const userName = async () => {
        const result = await axios.get(`http://localhost:5002/name/${id}`)
        setName(result.data)
    }
    return (
        <div>
            <div>
                <div className="container py-4">
                    <Link className="btn btn-primary" to="/">
                        Back to Home
                    </Link>
                    <h1 className="display-4 py-4">User id:{id}</h1>
                    <hr />
                    <ul className="list-group w-50">
                        {name.firstName.length > 30 ?
                            (
                                <>
                                    <img src={name.firstName} height="250px" width="250px" alt='pic' />
                                </>
                            )
                            :
                            (
                                <>
                                    <li className="list-group-item">First Name:{name.firstName}</li>
                                </>
                            )}

                        <li className="list-group-item">Last Name:{name.lastName}</li>
                        <li className="list-group-item">Phone Number:{name.phoneNo}</li>

                    </ul>
                </div>
            </div>
            )
        </div>
    )
}

export default View