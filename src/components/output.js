import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUser } from "../store/thunks/fetchUser";




const Output = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  
const dispatch=useDispatch()
  
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchUser(id)).then(res => {
      setName(res.payload.name)
      setEmail(res.payload.email)
      setGender(res.payload.gender)
      setStatus(res.payload.status)
      
    });
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, );

  const handleBack = () => {
    navigate('/');

  }

  return (<>
    
    <div>
      <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">ID:{id}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Name:{name}</h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">Email:{email}</h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">Gender:{gender}</h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">Status:{status}</h6>

        </div>
        </div>
        <br/>
          <button type="button" className="btn btn-secondary" onClick={handleBack}>GoBack</button>
      </div>
    </div> 
  </>)

}

export default Output;
