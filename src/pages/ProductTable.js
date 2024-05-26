import React, { useEffect, useState } from 'react'
import ProductService from '../Services/ProductService'
import { Link, useNavigate } from 'react-router-dom';


export default function ProductTable() {

  const navigate = useNavigate();
  const [prodarr,setprodarr]=useState([])

  useEffect(()=>{
  var arr=ProductService.getAllproducts();
  setprodarr(arr);
  },[])

  function gothere(){
    navigate('/form');
  }


  function deleteprod(pid){
    ProductService.deleteProduct(pid);
    navigate('/table')
  }

  return (
    <div>
    <button type="button" className="btn btn-primary" onClick={gothere}>Add new product</button><br></br>
      
      <table class="table table-dark">

    <thead>
      <tr>
        <th scope="col">Product id</th>
        <th scope="col">Name</th>
        <th scope="col">Quantity</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
     { prodarr.map(ob=>
      <tr>
        <td scope="row">{ob.pid}</td>
        <td>{ob.pname}</td>
        <td>{ob.qty}</td>
        <td>{ob.price}</td>
      <td> 
      <Link to={`/view/${ob.pid}`} state={{prod:ob}}>
      <button type='button' className="btn btn-success">view</button>&nbsp;&nbsp;&nbsp;
      </Link>
      <button type='button' className="btn btn-danger" onClick={()=>{deleteprod(ob.pid)}}>Delete</button>&nbsp;&nbsp;&nbsp;
      <Link to={`/edit/${ob.pid}`} state={{prod:ob}}>
      <button type='button' className="btn btn-warning">Edit</button>
      </Link>
      </td>
      </tr>)}

    </tbody>
  </table></div>
  )
}
