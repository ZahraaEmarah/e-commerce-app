let Register = () => {
    return (
        <div className="m-5">
            <div className="text-center ">
                <h5 className="m-5">New Account</h5>
                <input className="form-control me-2 m-2" type="text" placeholder="Username" />
                <input className="form-control me-2 m-2" type="email" placeholder="Email" />
                <input className="form-control me-2 m-2" type="password" placeholder="Password" />
                <select className="form-control form-select me-2 m-2">
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
            <div>
                <span className="mx-3">Profile Picture</span>
                <input type="file" id="img" name="img" accept="image/*" />
            </div>
            <button className="my-5 mx-2 btn btn-outline-primary" type="button">Register</button>
        </div>
    )
}

export default Register;