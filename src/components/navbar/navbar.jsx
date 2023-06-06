import { useState } from "react"
import NavbarView from "./navbarView"

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);

    const toggleNav = () => {
        setOpenNav(!openNav);
    }

    return <NavbarView openNav={openNav} toggleNav={toggleNav} />
}

export default Navbar