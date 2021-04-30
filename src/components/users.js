import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {Table} from "react-bootstrap";
export default function Users(){
  
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    axios.get(url).then(response => setData(response.data)).catch(error => console.error(error));
  }, [])
  
  
  return(
    <>
    <Link to="/add_users">
      Add User
    </Link>
    <br />
    <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Website</th>
      </tr>
    </thead>
    <tbody>
    {
      data.map((val, index) => (
        <tr key={index}>
        <td>{(index + 1)}</td>
        <td>{val.name}</td>
        <td>{val.email}</td>
        <td>{val.website}</td>
      </tr>
      ))
    }
    </tbody>
  </Table>
    </>
  )
}