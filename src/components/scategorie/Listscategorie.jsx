import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
    <div>
      Liste Sous Categories
      <table className='table table-stripped'>
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

export default Listscategorie
