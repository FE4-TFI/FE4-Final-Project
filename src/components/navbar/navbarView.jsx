import profile from '../../assets/img/profile.jpg'

const NavbarView = ({ openNav, toggleNav }) => (
    <section className="bg-gray-400 w-full px-6 py-4 lg:px-24">
        <div className="flex flex-wrap items-center justify-between">
            <h1 className='text-lg'><span className='font-bold'>SAVE </span>ENVIRONTMENT</h1>
            <button className='text-4xl font-semibold md:hidden' onClick={toggleNav}>&equiv;</button>
        <ul className={`flex flex-col gap-y-4 mt-4 md:flex md:flex-row md:mt-0 md:gap-x-6 md:items-center ${openNav ? 'block' : 'hidden'}`}>
            <li className='px-4 py-2 border border-1 border-white bg-transparent rounded-md w-fit'>EDUKASI</li>
            <li className='px-4 py-2 bg-transparent w-fit'>LAPOR</li>
            <li className='px-4 py-2 bg-white text-black rounded-md w-fit flex items-center gap-2'>
                Pengguna
                <img src={profile} alt="Profile Img" className='w-8 rounded-full' />
            </li>
        </ul>
        </div>
    </section>
)

export default NavbarView