import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useThunk } from "../hooks/use-thunk";
import { updateUserWithId } from "../store/slices/usersSlice";
import { fetchUser } from "../store/thunks/fetchUser";
import { updateUser } from "../store/thunks/updateUser";



const Edit = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  const [getUser] = useThunk(fetchUser)

  const dispatch = useDispatch();
  const { id } = useParams()

  useEffect(() => {
    getUser(id).then(res => {
      setName(res.name)
      setEmail(res.email)
      setGender(res.gender)
      setStatus(res.status)
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleEdit = (e) => {
    e.preventDefault();

    const alluser = {
      name, email, gender, status, id
    }
    dispatch(updateUser(alluser)).unwrap().then(Res => {
      dispatch(updateUserWithId(alluser))
      setName('')
      setEmail('')
      setGender('')
      setStatus('')
      navigate('/')
    })

  }

  return (<>
    <div className="mb-3">
      <form onSubmit={handleEdit}>
        <label className="form-label">Name</label>
        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=" "
          onChange={e => setName(e.target.value)} value={name} ></input>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            onChange={e => setEmail(e.target.value)} value={email} />
          <div id="emailHelp" className="form-text"></div>
        </div>



        <label className="form-label">Gender</label>
        <select className="form-select" aria-label="default select example" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option default value="">choose gender</option>
          <option value="male" onChange={(e) => setGender(e.target.valu)}>Male</option>
          <option value="female" onChange={(e) => setGender(e.target.value)}>Female</option>
        </select>


        <label className="form-label">Status</label>
        <select className="form-select" aria-label="default select example" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option default value="">choose status</option>
          <option value="active" onChange={(e) => setStatus(e.target.valu)}>Active</option>
          <option value="inactive" onChange={(e) => setStatus(e.target.value)}>Inactive</option>
        </select>

        <button className="btn btn-primary m-2 " onSubmit={handleEdit} >Submit</button>
      </form>
    </div>
  </>)

}

export default Edit;
