import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = async () => {
    const result = await axios.get("http://localhost:5001/user")
    console.log(result)
    setUser(result.data)
  }

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5001/user/${id}`)
    loadUser()
  }
  return (
    <div>
      <div className="container">
        <div className="py-4">
          <h1>Home Page</h1>
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user, index) => {
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.firstName.split('').slice(0, 30).join('')}</td>
                  <td>{user.lastName}</td>
                  <td>
                    <Link
                      to={`/view/${user.id}`}
                      className="btn btn-primary m-2"
                    >
                      View
                    </Link>
                    <Link
                      to={`/user/${user.id}`}
                      className="btn btn-outline-primary m-2"
                    >
                      Edit
                    </Link>
                    <Link
                      to="/"
                      className="btn btn-danger m-2"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home