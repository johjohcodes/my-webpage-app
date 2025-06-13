import { Link } from "react-router-dom"

function Nav(){
    return(
        <nav>
        <Link to="/">Home</Link>
        <Link to="/joejoh">joe</Link>
        <Link to="/musaMyGuy">musa</Link>
        <Link to="/yakubu">yakubu</Link>
        {/* Alternatively, you can use <a> tags if you prefer */}
        
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/post">Post</a> */}
      </nav>
    )
}
export default Nav