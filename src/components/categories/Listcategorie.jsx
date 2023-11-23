import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
    <div>
      Liste Categories
      <table className='table table-stripped'>
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

export default Listcategorie
