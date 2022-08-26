import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useParams} from 'react-router-dom';


const Get = () => {
    const [user, setUser] = useState({
        firstName:" ",
        lastName:" "
    });

    const { id } = useParams()
    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:5001/user/${id}`)
        setUser(res.data)
    }

    return (
        <div>
            <div className="container py-4">
                <Link className="btn btn-primary" to="/">
                    Back to Home
                </Link>
                <h1 className="display-4 py-4">User id:{id}</h1>
                <hr />
                <ul className="list-group w-50">
                  {user.firstName.length > 30 ? 
                  (
                     <>
                    <img src={user.firstName} height="250px" width="250px" alt='pic'/>
                    </>
                  )
                  :
                  (
                    <>
                    <li className="list-group-item">First Name:{user.firstName}</li>
                    </>
                  )}
                    
                    <li className="list-group-item">Last Name:{user.lastName}</li>
                </ul>
            </div>
        </div>
    )
}

export default Get;