// import logo from "../assets/Logo.png"


const Footer = () => {
    return (
        <footer className="footerk">
            <div className="containerl">
                <div className="my-row">
                    <div className="my-footer-col">
                        <h4>Untuk Bisnis</h4>
                        <ul>
                            <li><a href="#">Tentang Kami</a></li>
                            <li><a href="#">Alur Bisnis</a></li>
                            {/* <li><a href="#">Anggaran Keuangan</a></li> */}
                        </ul>
                    </div>
                    <div className="my-footer-col">
                        <h4>Bantuan</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            {/* <li><a href="#">blum</a></li>
                            <li><a href="#">blum</a></li>
                            <li><a href="#">blum</a></li> */}
                        </ul>
                    </div>
                    <div className="my-footer-col">
                        <h4>Kontak</h4>
                        <ul>
                            <li><a href="#">Email</a></li>
                            <li><a href="#">Telephone</a></li>
                            {/* <li><a href="#">Fax</a></li> */}

                        </ul>
                    </div>
                    <div className="my-footer-col">
                        <h4>Segera Hadir</h4>
                        <div className="sosial-media">
                            <a href="#">
                                {/* <img src={facebook}  alt="Facebook" /> */}
                                <i className='bx bxl-facebook' ></i>

                            </a>

                            <a href="#">
                                {/* <img src={twitter} alt="Twitter" /> */}
                                <i className='bx bxl-twitter' ></i>
                            </a>
                            <a href="#">
                                {/* <img src={instagram} alt="Instagram" /> */}
                                <i className='bx bxl-instagram' ></i>
                            </a>
                            <a href="#">
                                {/* <img src={linkedin} alt="LinkedIn" /> */}
                                <i className='bx bxl-linkedin' ></i>
                            </a>
                        </div>
                    </div>

                </div>
                <hr />
                <div className="footer-bottomm">
                    <p>&copy; {new Date().getFullYear()} SAVI | Save Environment.</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;