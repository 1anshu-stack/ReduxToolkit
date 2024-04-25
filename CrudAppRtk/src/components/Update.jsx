import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Just = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [updateData, setUpdateData] = useState();
    const {users, loading} = useSelector((state) => state.app);

    useEffect(()=>{
        if(id){
            const singleUser = users.filter((ele) => ele.id === id);
            setUpdateData(singleUser[0]);
        }
    },[])

    console.log(updateData);

    const newData = (e) => {
        setUpdateData({...updateData, [e.target.name] : e.target.value})
    }

    const handleUpdate = () => {
        e.preventDefault();
        dispatch(updateUser(updateData));
    }

    return (
        <div>
            <center>
                <form 
                    className="w-50 mx-auto" 
                    onSubmit={handleUpdate}
                >
                    <div className="mb-3">
                        <label className="form-lable">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            className="form-control" 
                            onChange={newData}
                            value={updateData && updateData.name} 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-lable">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            className="form-control" 
                            onChange={newData} 
                            value={updateData && updateData.email} 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-lable">Age</label>
                        <input 
                            type="number" 
                            name="age" 
                            className="form-control" 
                            onChange={newData} 
                            value={updateData && updateData.age} 
                        />
                    </div>
                    <div class="mb-3">
                        <input
                            className="form-check-input"
                            name="gender"
                            value="Male"
                            type="radio"
                            checked={updateData && updateData.gender === "Male"}
                            onChange={newData}
                            required
                        />
                        <label class="form-check-label">Male</label>
                    </div>
                    <div class="mb-3">
                        <input
                            className="form-check-input"
                            name="gender"
                            value="Female"
                            type="radio"
                            checked={updateData && updateData.gender === "Female"}
                            onChange={newData}
                        />
                        <label class="form-check-label">Female</label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </center>
        </div>
    )
};

export default Just;