import React,{useState,useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom';
export default function ViewProd() {
    const location = useLocation();
    // const param = useParams();
    // const navigate = useNavigate();
    const [formdetails,setformdetails] = useState([{pid:'',pname:'',qty:'',price:''}])

    useEffect(() => {
      setformdetails({...location.state.prod});   
      }, [])

  return (
    <div>
      <table border='2'>
      <thead>
      <tr>
        <th scope="col">Product id</th>
        <th scope="col">Name</th>
        <th scope="col">Quantity</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">{formdetails.pid}</th>
        <td>{formdetails.pname}</td>
        <td>{formdetails.qty}</td>
        <td>{formdetails.price}</td>
      </tr> 
      </tbody>
      </table>

    <Link to="/table">
      <button type='button' className="btn btn-primary">Back</button>
    </Link>
    </div>
  
  )
}
