import React, { useEffect, useState } from 'react'

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const insertscategorie = () => {

const [imagescategorie,setImagescategorie]=useState("")
const [nomscategorie,setNomscategorie]=useState("")
const [categorieID,setCategorieID]=useState("")

const[categories,setCategories]=useState([])
useEffect(()=>{
  getcategories()
},[]);

const onSubmit = async (e) => {
  e.preventDefault();
  await axios.post("https://back-end-ecommerce-theta.vercel.app/api/scategories", article);
  navigate("/scategories");
  };


const getcategories=async()=>{
  try {
    const res=await axios.get("https://back-end-ecommerce-theta.vercel.app/api/categories")
    setCategories(res.data)
  } catch (error) {
    console.log(error)
  }
}
  return (
<div className="container">
<div className="row">
<div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
<h4 align="center">Ajout Sous Catégories</h4>
<div className='form mt-3'>
<Form className="border p-3" >

<Row className="mb-2">


<Form.Group as={Col} md="12">
<Form.Label>Nom *</Form.Label>
<Form.Control
required
type="text"
placeholder="nomscategorie"
value={nomscategorie}
onChange={(e)=>setNomscategorie(e.target.value)}
/>
</Form.Group>

<Form.Group as={Col} md="12" >
<Form.Label >Images Categorie *</Form.Label>
<Form.Control
required
type="text"
placeholder="Images"
value={imagescategorie}
onChange={(e)=>setImagescategorie(e.target.value)}
/>
</Form.Group>


<Form.Group as={Col} md="12">
<Form.Label> Sous Catégorie</Form.Label>
<Form.Control
as="select"
type="select"
value={categorieID}
onChange={(e)=>setCategories(e.target.value)}
>
{categories.map((cat,index) =>
<option value={cat._id}> {cat.nomcategorie}</option>
)}
</Form.Control>
</Form.Group>
</Row>

<button type="submit" className="btn btn-outline-primary">
Submit
</button>
<Link className="btn btn-outline-danger mx-2" to="/articles">
Cancel
</Link>
</Form>
</div>
</div>
</div>
</div>

  )
}

export default insertscategorie
