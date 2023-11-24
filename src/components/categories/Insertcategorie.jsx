import React, { useEffect, useState } from 'react'

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const insertcategorie = () => {

const [nomcategorie,setNomcategorie]=useState("")
const [imagecategorie,setImagecategorie]=useState("")

const onSubmit = async (e) => {
  e.preventDefault();
  await axios.post("https://back-end-ecommerce-theta.vercel.app/api/articles", article);
  navigate("/articles");
  };
  
  return (

<div className="container">
<div className="row">
<div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
<h4 align="center">Ajout Article</h4>
<div className='form mt-3'>
<Form className="border p-3" >

<Row className="mb-2">

<Form.Group as={Col} md="12" >
<Form.Label >Nom Catégorie *</Form.Label>
<Form.Control
required
type="text"
placeholder="nomcategorie"
value={nomcategorie}
onChange={(e)=>setNomcategorie(e.target.value)}
/>

</Form.Group>
<Form.Group as={Col} md="12">
<Form.Label>Désignation *</Form.Label>
<Form.Control
required
type="text"
placeholder="Chemin Image Catégories"
value={imagecategorie}
onChange={(e)=>setImagecategorie(e.target.value)}
/>
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

export default insertcategorie
