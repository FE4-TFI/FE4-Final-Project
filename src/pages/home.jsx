// All Import
import BgVideo from '../assets/recycle.mp4'
import imgCard1 from '../assets/card1.jpg'
import imgCard2 from '../assets/card2.jpg'
import imgCard3 from '../assets/card3.jpg'
import imgSecondCard1 from '../assets/recycle.png'
import imgSecondCard2 from '../assets/reuse.png'
import imgSecondCard3 from '../assets/reduce.png'
// End All Import


function Home() {
    return (
        <>
            <div className="allhome">
                <div className="first-banner">
                    
                    <div className="text-banner">
                        <h1> Lingkungan</h1>
                        <h1> cerminan kehidupan </h1>
                        <p> Ayo bersama kurangi sampah demi kesehatan lingkungan yang lebih baik</p>
                        <a className="btn-showmore" href=''> Show More </a>
                    </div>

                </div>

                <div className="why">
                    <div className="title-why">
                        <h1>Mengapa kita harus mengurangi sampah plastik?</h1>
                    </div>
                    <div className="isi-why">
                        <p> Plastik adalah salah satu pencemar lingkungan yang paling serius. Sampah plastik yang tidak terurai membanjiri lautan, sungai, dan lahan, menyebabkan kerusakan ekosistem dan membahayakan kehidupan laut dan satwa liar. Plastik juga membutuhkan waktu sangat lama untuk terurai, sehingga menumpuk dalam jumlah besar di tempat pembuangan akhir atau berakhir sebagai limbah liar. </p>
                        <p> Plastik dapat melepaskan bahan kimia berbahaya ke lingkungan. Beberapa jenis plastik mengandung zat-zat seperti bisphenol A (BPA) dan ftalat, yang dapat masuk ke dalam makanan dan minuman yang dikemas dalam plastik. Zat-zat ini dapat merusak sistem hormonal dan dikaitkan dengan berbagai masalah kesehatan, termasuk gangguan perkembangan, gangguan reproduksi, dan risiko penyakit kronis. </p>
                        <p> Ketika plastik mencemari lingkungan, itu juga merusak ekosistem yang kompleks. Hewan laut sering kali tersangkut dalam sampah plastik atau memakan fragmen kecilnya, yang dapat menyebabkan cedera atau kematian. Akibatnya, rantai makanan terganggu dan dapat berdampak pada ekosistem secara keseluruhan. </p>
                    </div>
                </div>
                <div className="videobanner">
                    <video src={BgVideo} autoPlay muted loop className="video-bg"/>
                    <div className="text-video">
                        <h1> Bagaimana Process Recycle Bekerja? </h1>
                        <p> Proses daur ulang, atau recycle, melibatkan pengumpulan, pengolahan, dan penggunaan kembali bahan bekas atau limbah untuk menghasilkan produk baru.

                            < br/> < br/> <b>1. Pengumpulan </b> <br /> Tahap pertama dalam proses recycle adalah pengumpulan bahan bekas atau limbah. Ini bisa dilakukan melalui program pengumpulan sampah terpisah di rumah, kantor, atau tempat umum, atau melalui pusat daur ulang yang khusus.

                            < br/> < br/> <b>2. Pemisahan </b><br /> Setelah pengumpulan, bahan bekas atau limbah perlu dipisahkan menjadi kategori yang sesuai. Misalnya, kertas harus dipisahkan dari plastik, logam dari kaca, dan sebagainya. Pemisahan ini penting karena bahan yang berbeda memerlukan proses recycle yang berbeda.

                            < br/> < br/> <b>3. Pengolahan</b> <br /> Setelah pemisahan, bahan bekas atau limbah tersebut perlu diolah agar siap untuk direcycle. Ini melibatkan proses seperti mencuci, menghancurkan, dan memotong bahan menjadi ukuran yang lebih kecil. Proses ini bertujuan untuk mempersiapkan bahan untuk tahap selanjutnya, di mana mereka akan diubah menjadi bahan baku baru.

                            < br/> < br/> <b>4. Penciptaan bahan baku baru </b><br /> Bahan bekas atau limbah yang sudah diolah kemudian diubah menjadi bahan baku baru melalui proses tertentu. Misalnya, kertas bekas diolah menjadi serat pulp yang digunakan untuk membuat kertas baru, plastik bekas dilebur dan dicetak ulang menjadi produk plastik baru, atau logam bekas dilebur dan dibentuk menjadi bahan logam baru.

                            < br/> < br/> <b>5. Produksi produk baru</b> <br /> Bahan baku baru yang dihasilkan dari recycle digunakan dalam proses produksi untuk membuat produk baru. Contohnya, kertas baru yang dibuat dari serat pulp kertas bekas dapat digunakan untuk mencetak majalah atau kertas kemasan. Plastik yang direcycle dapat digunakan untuk membuat botol plastik baru atau produk plastik lainnya.

                            < br/> < br/> <b> 6. Distribusi dan penggunaan ulang </b><br /> Produk baru yang dihasilkan dari recycle didistribusikan dan digunakan kembali oleh konsumen. Dengan menggunakan produk yang terbuat dari bahan daur ulang, kita dapat mengurangi permintaan akan sumber daya alam baru dan mengurangi jumlah limbah yang masuk ke tempat pembuangan akhir.

                            < br/> < br/> Penting untuk diingat bahwa proses recycle dapat bervariasi tergantung pada jenis bahan yang didaur ulang dan sistem recycle yang ada di suatu negara atau daerah. Tujuan utama dari proses ini adalah mengurangi dampak lingkungan, menghemat sumber daya alam, dan mengurangi limbah yang dikirim ke tempat pembuangan akhir. </p>
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
                
            </div>
        </>
    )
}

export default Home