import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import trailerEdukasi from '../assets/trailerEdukasi.mp4'

function Edukasi(){

    const navigate = useNavigate()
    return(
        <>
            <main>

                <div className="container-edukasi">
                    <h1>Edukasi sampah</h1>
                    <video src={trailerEdukasi} autoPlay muted loop ></video>
                    {/* <Link to="/Edukasi/reuse">Reuse</Link>
                    <Link to="/Edukasi/reduce">Reduce</Link>
                    <Link to="/Edukasi/recycle">Recycle</Link> */}
                </div>

                
                


                <section id="introduction">
                <h2>Apa itu Sampah Plastik?</h2>
                <p>Sampah plastik adalah jenis sampah yang terbuat dari bahan plastik. Plastik merupakan bahan yang sulit terurai dan dapat mencemari lingkungan jika tidak dikelola dengan baik.</p>
                </section>

                

                <section id="impact">
                <h2>Dampak Sampah Plastik</h2>
                <ul>
                    <li>Mencemari laut dan mengancam kehidupan laut</li>
                    <li>Mengurangi kualitas air dan tanah</li>
                    <li>Menyebabkan kerusakan ekosistem</li>
                    <li>Merusak kesehatan manusia dan hewan</li>
                </ul>
                </section>


                <section id="waste">
                    <h2>Jumlah Sampah Plastik yang Menumpuk</h2>
                    <p>Berdasarkan data terbaru, jumlah sampah plastik yang menumpuk saat ini sangat mengkhawatirkan. Beberapa fakta tentang jumlah sampah plastik yang menumpuk:</p>
                    <ul>
                        <li>Rata-rata, setiap tahunnya, lebih dari 8 juta ton plastik masuk ke dalam laut.</li>
                        <li>Lebih dari 500 miliar kantong plastik digunakan setiap tahunnya di seluruh dunia.</li>
                        <li>Sampah plastik merupakan salah satu penyumbang utama polusi di darat dan di laut.</li>
                    </ul>
                </section>

                <section id="solution">
                <h2>Solusi Mengatasi Sampah Plastik</h2>
                <ol>
                    <li>Reduksi penggunaan plastik sekali pakai</li>
                    <li>Daur ulang plastik</li>
                    <li>Promosikan penggunaan kantong belanja kain atau tumbuh-tumbuhan</li>
                    <li>Edukasi masyarakat tentang pentingnya pengelolaan sampah plastik</li>
                </ol>
                </section>

                <marquee>Ayo bersama kurangi sampah plastik || Ayo pakai masker || Gunakan plastik secukupnya || Buang sampah pada tempatnya || Coba daur ulang plastik</marquee>
                <div className="all-grid">
                    <h1>Artikel</h1>
                    <div className="container-grid">
                        <div className="grid-item item1" onClick={() => navigate("/Menumpuk")}>
                            <h1>Menumpuk</h1>
                        </div>
                        <div className="grid-item item2" onClick={() => navigate("/Membantu")}>
                            <h1>Membantu</h1>
                        </div>
                        <div className="grid-item item3" >
                            <h3></h3>
                        </div>
                        <div className="grid-item item4" onClick={() => navigate("/GotongRoyong")}>
                            <h1>Gotong Royong</h1>
                        </div>
                        <div className="grid-item item5" onClick={() => navigate("/Perusakan")}>
                            <h1>Perusakan</h1>
                        </div>
                        <div className="grid-item item6" onClick={() => navigate("/Efektif")}>
                            <h1>Efektif</h1>
                        </div>
                    </div>
                </div>
                <marquee>Ayo bersama kurangi sampah plastik || Ayo pakai masker || Gunakan plastik secukupnya || Buang sampah pada tempatnya || Coba daur ulang plastik</marquee>

            </main>
            
            
        </>
    )
}

export default Edukasi