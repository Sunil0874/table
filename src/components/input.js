import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../store/thunks/addUser";



const NewUser = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const alluser = {
            name, email, gender, status
        }
        dispatch(addUser(alluser)).unwrap().then(Res => {
            setName('')
            setEmail('')
            setGender('')
            setStatus('')
            navigate('/')
        })

    }

    return (<>
        <div className="mb-3">
            <form onSubmit={handleSubmit}>
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

                <button className="btn btn-primary m-2 " onSubmit={handleSubmit} >Submit</button>
            </form>
        </div>
    </>)

}

export default NewUser;
