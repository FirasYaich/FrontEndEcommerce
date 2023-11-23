import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
    <div>
      Liste Articles
      <table className='table table-stripped'>
      <thead>
          <th>Nom Article  </th>
          <th>Image Article</th>
          <th>Marque Article </th>
          <th>Prix Article </th>
          <th>Quantité En Stoque </th>
          <th>Reference Article </th>

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
          <td>{art.nomscategorie}</td>     
          <td>
            <botton className="btn btn-warning"> Modifier </botton>
            <botton className="btn btn-danger" > Supprimer </botton>
          </td>
        </tr>

)}
          
        </tbody>

      </table>

    </div>
  )
}

export default Listarticle
