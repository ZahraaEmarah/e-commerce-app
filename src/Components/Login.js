let Login = ()=>{
    return(
        <div className="text-center m-5">
            Login
            <div className="">
                <input className="form-control me-2 m-2" type="email" placeholder="Email"/>
                <input className="form-control me-2 m-2" type="password" placeholder="Password"/>
                <button className="btn btn-outline-primary" type="button">Login</button>
            </div>
        </div>
    )
}

export default Login;