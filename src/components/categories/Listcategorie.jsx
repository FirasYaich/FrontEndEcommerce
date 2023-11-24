import axios from 'axios'

import Button from 'react-bootstrap/Button';

import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

import { Link } from 'react-router-dom';

const Listcategorie = () => {

//appel methode useEffect:
  useEffect( ()=>{
    getcategories()
  },[] )

//declaration State:
  const[categories,setCategories]=useState([])

//declaration methode getcategories:
  const getcategories=async()=>{
  
    await axios.get("https://back-end-ecommerce-theta.vercel.app/api/categories")
     .then(res=>{
        setCategories(res.data)
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
<Link className="btn btn-outline-light" to="/insertcat">
Ajouter Catégories
</Link>
</div>
</nav>
</div>

<div className="py-4">

<Table className="table border shadow">
      <thead>
          <th>Nom Categorie  </th>
          <th>Image Categorie</th>
          <th>Action         </th>

        </thead>
        <tbody>
        {categories.map((cat,index)=>
        <tr key={index}>
          <td>{cat.nomcategorie}</td>
          <td><img src={cat.imagecategorie} width={80} height={80}/></td>
          
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

export default Listcategorie
