import { Outlet } from "react-router-dom"
import BackPurpleLogo from '../pictures/black-purple-logo.png'

const Layout =()=>{

    return(<>
                <main className="d-flex flex-column justify-content-center">
                <Outlet />
                <img className="px-auto mx-auto" height="120px" width="350px" src={BackPurpleLogo} alt="company logo" />
                </main>
           </>)
}

export default Layout