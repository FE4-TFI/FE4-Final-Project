import profile from '../../assets/img/profile.jpg'
import './navbar.css'

const NavbarView = ({ openNav, toggleNav }) => (
    <nav className="navbar-container">
        <div className="navbar-box">
            <h1 className='text-lg'><span className='font-bold'>SAVE </span>ENVIRONTMENT</h1>
            <button className='nav-btn' onClick={toggleNav}>&equiv;</button>
        <ul className={`flex flex-col gap-y-4 mt-4 md:flex md:flex-row md:mt-0 md:gap-x-6 md:items-center ${openNav ? 'block' : 'hidden'}`}>
            <li className='edukasi-btn'>EDUKASI</li>
            <li className='lapor-btn'>LAPOR</li>
            <li className='pengguna-btn'>
                Pengguna
                <img src={profile} alt="Profile Img" className='img-profile' />
            </li>
        </ul>
        </div>
    </nav>
)

export default NavbarView