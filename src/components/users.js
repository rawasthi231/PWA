import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Table } from "react-bootstrap";
const SERVER = process.env.SERVER;

export default function Users() {

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(SERVER);
    let url = `http://localhost:8000/userList`;
    axios.get(url).then(response => setData(response.data)).catch(error => console.error(error));
  }, [])

  // const handleStatusChange = (id) => {
  //   console.log(id);
  // }


  return (
    <>
      <div className="m-1">
        <Link to="/add_users" className="btn btn-sm btn-outline-dark">
          Add User
        </Link>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((val, index) => (
              <tr key={index}>
                <td>{(index + 1)}</td>
                <td>{val.name}</td>
                <td>{val.mobile}</td>
                <td>{val.email}</td>
                <td>{val.address}</td>
                <td>
                  <Link to={{pathname : "/edit_user", state : {val}}}>
                    Edit
                  </Link>
                {/*<button className="btn btn-xs btn-outline-warning" onClick={() => handleStatusChange(val._id)}>
                  {
                    (val.status === "Active") ? "Deactivate" : "Activate"
                  }
                </button>*/}
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  )
}