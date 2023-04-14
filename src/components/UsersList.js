import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from "../store/thunks/fetchUsers";
import { Link } from "react-router-dom";
import { deleteUser } from "../store/thunks/deleteUser";
import {showUser} from "../store/thunks/showUser"
import { updateUser } from "../store/thunks/updateUser";



const UsersList = () => {
    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector((state) => {
        return state.users;
    })

    useEffect(() => {
        if (data.length === 0) {
            dispatch(fetchUsers());
        }
    }, [dispatch, data.length]);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error fetching data...</div>
    }

    const handleDelete = (item) => {
        if (window.confirm("Are you sure wanted to delete the user ?")) {
            dispatch(deleteUser(item));
        }
    }

    const handleEdit = (id) => {
        dispatch(updateUser(id));
    }

    const handleShow = (item) => {
        dispatch(showUser(item));
        
    }

    return (
        <div>
            <div className="btn btn-light ">
                <Link to='/new'>
                    <button className="btn btn-primary" >
                        New User
                    </button>
                </Link>

            </div>
            <table style={{ width: '100%' }} className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                {

                    data.map((item) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.gender}</td>
                                    <td style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Link to = {`/showUser/${item.id}`}>
                                        <div style={{ margin: '3px' }} className="btn btn-primary"
                                        onClick={()=> handleShow(item)}>Show</div>
                                        </Link>
                                        <Link to={`/edit/${item.id}`}>
                                        <div style={{ margin: '3px' }} className="btn btn-success"
                                        onClick={() => handleEdit(item)}>Edit</div>
                                        </Link>
                                        <div style={{ margin: '3px' }} className="btn  btn-danger"
                                            onClick={() => handleDelete(item)} >Delete</div>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })
                }

            </table>
        </div>
    )
};


export default UsersList;
