import React, { useState,useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ProductService from '../Services/ProductService';

export default function EditForm() {

    const location = useLocation();
    // const param = useParams();
    const navigate = useNavigate();
    const [formdetails,setformdetails] = useState([{pid:'',pname:'',qty:'',price:''}])

    useEffect(() => {
      setformdetails({...location.state.prod});   
      }, [])
    

    const editprod=()=>{
        if(formdetails.pid==='' || formdetails.pname===''|| formdetails.qty==='' || formdetails.price===''){
            alert("Please fill all the fields");
        }

        var p = {pid: parseInt(formdetails.pid), pname: formdetails.pname , qty: parseInt(formdetails.qty) , price: parseInt(formdetails.price)}

        ProductService.editproduct(p);
        // setformdetails([{pid:'',pname:'',qty:'',price:''}]);
        navigate('/table');

    }

    const handlechange=(event)=>{
        var name = event.target.name;
        var value = event.target.value;
        setformdetails({...formdetails,[name]:value})
    }

  return (
    <div>
        <form>
  <div className="form-group">
    <label htmlFor="pid">Product pid</label>
    <input type="text" className="form-control" id="pid" name="pid"
        value={formdetails.pid}
        onChange={handlechange}
        readOnly
    />
  </div>
  <div className="form-group">
    <label htmlFor="pname">Product name</label>
    <input type="text" className="form-control" id="pname" name="pname"
    value={formdetails.pname}   
    onChange={handlechange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="qty">Product Quantity</label>
    <input type="text" className="form-control" id="qty" name="qty"
        value={formdetails.qty}
        onChange={handlechange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="price">Product Price</label>
    <input type="text" className="form-control" id="price" name="price"
    value={formdetails.price}
    onChange={handlechange}
    />
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={editprod}>Update product</button>
</form>
    </div>
  )
}
