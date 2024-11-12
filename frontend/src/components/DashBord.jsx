import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom'
import Button from '@mui/material/Button';

const DashBord = () => {
  let [name, setname] = useState("")
  let ID = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:4001/user/${ID.ID}`)
    .then((e)=>{
      setname(e.data)
    
    })
    .catch(()=>{console.log("unable to fetch data in Edit comp");})
},[])

  return (
    <div>
      <div id='navbar' className='p-1.5 bg-lime-500'>
        <ul className='flex gap-24 px-10'>
          <li className='p-1'>Home</li>
          <li><Button variant="text"><Link to='/create-employee'> Add Employee</Link></Button> </li>
          <li><Button variant="text"><Link to="/employee-list">  Employee list </Link></Button> </li>
          <li className='p-1 text-sky-700 border border-dashed border-red-400 '>{name}</li>
          <li className='p-1'>Logout</li>
        </ul>
      </div>
      <h1 className='p-1.5 bg-lime-300 text-sky-700 indent-10 text-xl'>Dashboard</h1>
      <p className='bg-white indent-10 font-serif p-1.5 text-6xl h-screen flex items-stretch'>Welcome to admin panel {name}</p>
    </div>
  )
}

export default DashBord