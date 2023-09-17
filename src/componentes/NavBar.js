import Links from "./Links";
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom'

function NavBar () {
    return (
        <>
        <nav id="NavBar" className="NavBar">
            <Link to='/' className="tdn">
                <h3>ADBJJ Store</h3>
            </Link>
            <Links />
            <CartWidget />
        </nav>
        </>
    )
}

export default NavBar