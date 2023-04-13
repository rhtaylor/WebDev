import { Link } from "react-router-dom"
const Navigation = () =>{

    return(<nav className="d-flex justify-content-center">
           <Link className="px-4" to="/home">Home</Link>
           <Link className="px-4" to="/resume">Resume</Link>
           <Link className="px-4" to="/technologies">Tech</Link>
          </nav>
    )
}

export default Navigation;