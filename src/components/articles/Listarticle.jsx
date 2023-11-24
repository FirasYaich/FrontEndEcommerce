import axios from 'axios'

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

import { Link } from 'react-router-dom';

const Listarticle = () => {
  
  useEffect( ()=>{
    getarticles()
  },[] )


  const[articles,setArticles]=useState([])

  const getarticles=async()=>{
    await axios.get("https://back-end-ecommerce-theta.vercel.app/api/articles")
    .then(res=>{
      setArticles(res.data)
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
<Link className="btn btn-outline-light" to="/insertart">
Ajouter article
</Link>
</div>
</nav>
</div>
<div className="py-4">

  
      <Table className="table border shadow">
      <thead>
          <th>Nom Article  </th>
          <th>Image Article</th>
          <th>Marque Article </th>
          <th>Prix Article </th>
          <th>Quantité En Stoque </th>
          <th>Reference  </th>
          <th> Modifier </th>
          <th> Supprimer </th>

        </thead>
        <tbody>
        {articles.map((art,index)=>
        <tr key={index}>
          <td>{art.designation}</td>
          <td><img src={art.imageart} width={80} height={80}/></td>
          <td>{art.marque}</td>
          <td>{art.prix}</td>
          <td>{art.qtestock}</td>
          <td>{art.reference}</td>    
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

export default Listarticle
