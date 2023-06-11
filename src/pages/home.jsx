// All Import
import recyclevid from '../assets/recycle.mp4'
import reusevid from '../assets/reuse.mp4'
import reducevid from '../assets/reduce.mp4'
import EducationVector from '../assets/education-vector.png'
import MembantuVector from '../assets/membantu.png'
import MengingatkanVector from '../assets/mengingatkan.png'
import MerawatVector from '../assets/merawat.png'
import imgHome from '../assets/home.png'
import imgCard1 from '../assets/card1.jpg'
import imgCard2 from '../assets/card2.jpg'
import imgCard3 from '../assets/card3.jpg'
import imgSecondCard1 from '../assets/recycle.png'
import imgSecondCard2 from '../assets/reuse.png'
import imgSecondCard3 from '../assets/reduce.png'
import imgPartnership from '../assets/skilvul logo.png'
import noPlastic from '../assets/noplastic.png'
import keepOcean from '../assets/keepocean.png'
import lovePlanet from '../assets/loveplanet.png'
import noBottle from '../assets/nobottle.png'
import bringCup from '../assets/bringcup.png'
import { useNavigate } from 'react-router-dom'
// End All Import


function Home() {
    const navigate = useNavigate()

    return (
        <>
            <div className="allhome">
                <div className="first-banner">
                    
                    <div className="text-banner">
                        <h1> Jadilah anak muda yang cinta Lingkungan</h1>
                        <p> Ayo bersama kurangi sampah demi kesehatan lingkungan yang lebih baik</p>
                        <a className="btn-showmore" href=''> Show More </a>
                    </div>

                    <div className="img-banner">
                        <img src={imgHome} alt="" />
                    </div>

                </div>

                <marquee>Ayo bersama kurangi sampah plastik || Ayo pakai masker || Gunakan plastik secukupnya || Buang sampah pada tempatnya || Coba daur ulang plastik</marquee>

                <div className="tujuan-savi">
                    <div className="title-tujuan">
                        <h1>Apa tujuan savi?</h1>
                    </div>
                    <div className="isi-tujuan">
                        <div className="container-tujuan">
                            <div className="isi-gambar">
                                <img className="first-image" src={EducationVector} alt="" />
                                <h1> Mengedukasi </h1>
                                <p> Memberikan edukasi terkait bahaya sampah plastik dan cara penanggulangannya </p>
                            </div>

                            <div className="isi-gambar">
                                <img className="first-image" src={MembantuVector} alt="" />
                                <h1> Membantu</h1>
                                <p> Memberikan bantuan dalam bentuk digital </p>
                            </div>

                            <div className="isi-gambar">
                                <img className="first-image" src={MengingatkanVector} alt="" />
                                <h1> Mengingatkan </h1>
                                <p> Mengingatkan masyarakat untuk tetap peduli akan lingkungan terhadap sampah plastik </p>
                            </div>

                            <div className="isi-gambar">
                                <img className="first-image" src={MerawatVector} alt="" />
                                <h1> Merawat </h1>
                                <p> Merawat lingkungan sekitar dari banyaknya sampah plastik </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="why">
                    <div className="title-why">
                        <h1>Mengapa kita harus mengurangi sampah plastik?</h1>
                    </div>
                    <div className="isi-why">
                        <div className="slice-why1">
                            <div className="image-desc">
                                <div className="desc">
                                    <h2>Menjaga habitat hewan air</h2>
                                    <p>sampah plastik dapat mengganggu habitat hewan perairan lho</p>
                                </div>
                                <img src={keepOcean} alt="" />
                            </div>
                            <div className="image-desc">
                                <div className="desc">
                                    <h2>Menjaga kesehatan dunia</h2>
                                    <p>Emangnya kamu mau tinggal di lingkungan yang kotor? </p>
                                </div>
                                <img src={lovePlanet} alt="" />
                                
                            </div>
                        </div>
                        
                        <div className="slice-why2">
                            <img src={noPlastic} alt="" />
                        </div>
                        <div className="slice-why3">
                            <div className="image-desc">
                                <img src={noBottle} alt="" />
                                <div className="desc">
                                    <h2>Sampah yang sulit</h2>
                                    <p>Sampah plastik sangat sulit didaur ulang dan membutuhkan waktu yang sangat lama</p>
                                </div>
                            </div>
                            <div className="image-desc">
                                <img src={bringCup} alt="" />
                                <div className="desc">
                                    <h2>Cangkir Pribadi</h2>
                                    <p>Bisa mengurangi dan memberikan efektifitas kepada sampah plastik lho</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="videobanner">
                    <div className="isi-video">
                        <video src={reusevid} autoPlay muted loop className="video-bg"/>
                        <div className="text-video">
                            <h1> Reuse </h1>
                            <h2> Lihat bagaimana barang tidak terpakai diolah kembali menjadi layak pakai dan mulailah mencobanya</h2>
                            <a className="btn-selengkapnya" onClick={() => navigate("/artikel/1")}> Selengkapnya &rarr;</a>
                        </div>
                    </div>

                    <div className="isi-video">
                        <video src={reducevid} autoPlay muted loop className="video-bg"/>
                        <div className="text-video">
                            <h1> Reduce </h1>
                            <h2> Ayo berganti menggunakan bahan non-plastik dalam kehidupan sehari-hari</h2>
                            <a className="btn-selengkapnya" href=''> Selengkapnya &rarr;</a>
                        </div>
                    </div>

                    <div className="isi-video">
                        <video src={recyclevid} autoPlay muted loop className="video-bg"/>
                        <div className="text-video">
                            <h1> Recycle </h1>
                            <h2> Lihat dan terapkan bagaimana proses recycle bahan plastik dilakukan. Lalu mulailah langkahmu untuk mengelola sampah plastik menjadi lebih berguna</h2>
                            <a className="btn-selengkapnya" href=''> Selengkapnya &rarr;</a>
                        </div>
                    </div>
                </div>
                <div className="judul-card">
                    <h1> ACARA </h1>
                </div>
                <div className="cardhome">
                    <div className="card1">
                        <div className="image-card">
                            <img className="first-image" src={imgCard2} alt="" />
                        </div>
                        <div className="img-bio">
                            <p> Biodiversity is <br /> <br /> the spice of nature </p>
                            <img className="second-image" src={imgSecondCard1} alt="" />
                        </div>

                    </div>

                    <div className="card2">
                        <div className="image-card">
                            <img className="first-image" src={imgCard1} alt="" />
                        </div>
                        <div className="img-bio">
                            <p> World Environment Day <br /> <br /> reminds us to work for <br /> <br /> the safety of nature </p>
                            <img className="second-image" src={imgSecondCard2} alt="" />
                        </div>
                    </div>

                    <div className="card3">
                        <div className="image-card">
                            <img className="first-image" src={imgCard3} alt="" />
                        </div>
                        <div className="img-bio">
                            <p> Celebrate Biodiversity <br /> <br /> on June 5th & Everyday</p>
                            <img className="second-image" src={imgSecondCard3} alt="" />
                        </div>
                    </div>

                </div>

                <div className="partnership">
                    <div className="title-partnership">
                        <h1>Partnership</h1>
                    </div>

                    <div className="isi-partnership">
                        <div className="logo-partnership">
                            <img src={imgPartnership} alt="" />
                        </div>
                        <div className="detail-partnership">
                            <h1> Kampus Merdeka Studi Independen </h1>
                            <h2> PT.Impactbyte Teknologi Edukasi </h2>
                            <h2> Front End Website Developer </h2>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Home