import logo from "../assets/Logo.png"


function Footer(){
    return(
        <>
            <div className="container-footer">
                <div className="isi-footer">

                    {/* brand */}
                    <div className="footer-brand">
                        <div className="logo-footer">
                            <img src={logo} alt="inilogo" />
                        </div>
                        <div className="brand-footer">
                            <h1>Save Environment</h1>
                        </div>
                    </div>

                    {/* Kontak */}
                    <div className="footer-kontak">

                    </div>

                    
                </div>

                {/* Copyright */}
                    <div className="copyright">
                        
                    </div>
            </div>
        </>
    );
}
export default Footer