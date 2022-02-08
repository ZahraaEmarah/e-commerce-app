import NavBar from './NavBar'

let Home = () => {
    return (
        <div>
            <NavBar/>
            HomePage
            <ul>
                <li><a>About</a></li>
                <li><a>Register</a></li>
                <li><a>Login</a></li>
                <li><a>Profile --{'>'} Order</a></li>
            </ul>
        </div>
    )
}

export default Home;