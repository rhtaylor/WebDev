import { Link } from "react-router-dom"
const Navigation = () =>{

    return(<nav className="d-flex justify-content-center">
           <Link className="h1 px-4 text-danger bg-dark" to="/home">Home</Link>
           <Link className="h1 px-4 text-danger bg-dark" to="/resume">Resume</Link>
           <Link className="h1 px-4 text-danger bg-dark" to="/technologies">Tech</Link>
          </nav>
    )
}

export default Navigation;