import axios from 'axios'

import Button from 'react-bootstrap/Button';

import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

import { Link } from 'react-router-dom';

const Listscategorie = () => {

//appel methode useEffect:
useEffect( ()=>{
  getscategories()
},[] )
  
  const[scategories,setScategories]=useState([])

  const getscategories=async()=>{
    
    await axios.get("https://back-end-ecommerce-theta.vercel.app/api/scategories")
    .then(res=>{
    setScategories(res.data)
  })
  .catch(error=>{
    console.log(error)
  })
  }
  return (
<div className="container">   
<div >
<nav className="navbar navbar-expand-lg navbar-dark bg-success">
<div className="container-fluid">
<Link className="btn btn-outline-light" to="/insertscat">
Ajouter Sous Catérogories
</Link>
</div>
</nav>
</div>

<div className="py-4">

  
      <Table className="table border shadow">
      <thead>
          <th>Nom Sous Categorie  </th>
          <th>Image Sous Categorie</th>
          <th>Action         </th>

        </thead>
        <tbody>
        {scategories.map((scat,index)=>
        <tr key={index}>
          <td>{scat.nomscategorie}</td>
          <td><img src={scat.imagescategorie} width={80} height={80}/></td>
          <td>
          <Button variant="outline-success">
          <i class="fa-solid fa-pen-to-square"></i>
          Modifier
          </Button>
          </td>
          <td>
          <Button variant="outline-danger">
          <i class="fa-solid fa-trash"></i>
          Supprimer
          </Button>
          </td>
        </tr>

)}
          
        </tbody>

        </Table>
    </div>
  </div>
  )
}

export default Listscategorie
