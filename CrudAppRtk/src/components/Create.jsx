import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";

const Create = () => {

    const dispatch = useDispatch();
    const [users, setUsers] = useState({});
    const getUserData = (e) => {
        setUsers({...users, [e.target.name]:e.target.value});
        // console.log(users);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(users);
        dispatch(createUser(users));
    }

    return (
        <div>
            <center>
            <form className="w-50 mx-auto" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-lable">Name</label>
                    <input type="text" name="name" className="form-control" onChange={getUserData}/>
                </div>
                <div className="mb-3">
                    <label className="form-lable">Email</label>
                    <input type="email" name="email" className="form-control" onChange={getUserData}/>
                </div>
                <div className="mb-3">
                    <label className="form-lable">Age</label>
                    <input type="number" name="age" className="form-control" onChange={getUserData}/>
                </div>
                <div className="mb-3">
                    <input className="form-check-input" name="male" value="male" type="radio" onChange={getUserData}/>
                    <label className="form-check-label">Male</label>
                </div>
                <div className="mb-3">
                    <input className="form-check-input" name="female" value="female" type="radio" onChange={getUserData}/>
                    <label className="form-check-label">Female</label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            </center>
        </div>
    )
};

export default Create;