import ProductsList from '../Containers/AllProducts';
import Search from '../Containers/Search';
import NavBar from './NavBar'

let Home = () => {
    return (
        <div>
            <NavBar/>
            <ProductsList/>
        </div>
    )
}

export default Home;