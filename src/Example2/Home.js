import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const [name, setName] = useState([]);

    useEffect(() => {
        userName();
    }, [])

    const userName = async () => {
        const result = await axios.get("http://localhost:5002/name")
        console.log(result)
        setName(result.data)

    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:5002/name/${id}`)
        userName()
    }
    return (
        <div>
            <div className="container">
                <div className="py-4">
                    <h1>Home Page</h1>
                    <table className="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last name</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {name.map((name, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{name.firstName}</td>
                                    <td>{name.lastName}</td>
                                    <td>{name.phoneNo}</td>
                                    <td>
                                        <Link to={`/view/${name.id}`} 
                                        className='btn btn-primary m-2  '>
                                            View
                                        </Link>
                                        <Link to={`/example2/${name.id}`} 
                                        className='btn btn-outline-primary m-2'>
                                            Edit
                                        </Link>
                                        <Link to="/" className='btn btn-danger m-2' onClick={() => deleteUser(name.id)}>
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home