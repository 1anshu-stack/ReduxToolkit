const Create = () => {
    return (
        <div>
            <center>
            <form className="w-50 mx-auto">
                <div className="mb-3">
                    <label className="form-lable">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-lable">Email</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-lable">Age</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <input className="form-check-input" type="radio" />
                    <label className="form-check-label">Male</label>
                </div>
                <div className="mb-3">
                    <input className="form-check-input" type="radio" />
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