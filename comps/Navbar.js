import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>  
            <div className = "logo">
                <h1>User List</h1>
            </div>
            <Link href = "/"><a>Home</a></Link>
            <Link href = "/login"><a>About</a></Link>
            <Link href = "/login"><a>Login</a></Link>
        </nav>
     );
}
 
export default Navbar;