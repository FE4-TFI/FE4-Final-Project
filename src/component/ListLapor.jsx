import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { laporUser } from '../redux/laporReducer';
import axios from "axios";
import * as filestack from 'filestack-js';

function Lapor() {
    // state untuk form
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [nohp, setNohp] = useState("");
    const [email, setEmail] = useState("");
    const [lokasi, setLokasi] = useState("");
    const [jenis, setJenis] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [uploadedImageUrl, setUploadedImageUrl] = useState(""); // State untuk menyimpan URL gambar yang diunggah
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState(false); // State untuk menandai adanya error form

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validasi form wajib diisi
        if (!username || !nohp || !email || !lokasi || !jenis || !deskripsi || !uploadedImageUrl) {
            setFormError(true);
            return;
        }

        // Buat objek data laporan
        const laporData = {
            username,
            nohp,
            email,
            lokasi,
            jenis,
            deskripsi,
            bukti: uploadedImageUrl,
        };

        // Dispatch action laporUser dengan data laporan
        dispatch(laporUser(laporData))
            .unwrap()
            .then((response) => {
                // Proses berhasil, reset form dan set pesan sukses
                setUsername("");
                setNohp("");
                setEmail("");
                setLokasi("");
                setJenis("");
                setDeskripsi("");
                setUploadedImageUrl("");
                alert("Terima kasih, Laporan berhasil dibuat dan masuk kedalam daftar laporan")
                setFormError(false);
                e.target.reset(response);
            })
            .catch((error) => {
                // Proses gagal, set pesan error
                alert("Laporan Gagal Dibuat")
                setFormError(false);
                e.target.reset(error);
            });
    };

    const handleFileUpload = (event) => {
        event.preventDefault();
        // Inisialisasi FileStack client
        const client = filestack.init('AYbGpIzmlTuGzPFIC3t7oz');

        // Konfigurasi FileStack picker
        const options = {
            onUploadDone: (result) => {
                const imageUrl = result.filesUploaded[0].url;
                setUploadedImageUrl(imageUrl);
            },
        };

        // Buka FileStack picker untuk memilih gambar
        client.picker(options).open();
    };

    // untuk get data
    const [data, setData] = useState([])
    useEffect(() => {
        axios
            .get('https://648aeba217f1536d65e9f714.mockapi.io/Lapor')
            .then(response => {
                // menangkap data dari api
                const apiData = response.data;

                // set data dalam state
                setData(apiData)
            })
            .catch(error => {
                console.error(error)
            });
    }, []);

    return (
        <>  
        
        

            <main>
                <section id="report-head">
                <h2>Bersama tindak tegas terhadap oknum pelanggar dan perusakan lingkungan</h2>
                <p>Jika Anda melihat pelanggaran terkait sampah plastik atau lokasi penimbunan sampah plastik, silakan laporkan dengan mengisi form laporan dibawah atau menghubungi kami melalui:</p>
                <ul>
                    <li>Email: savi@pelanggaransampahplastik.com</li>
                    <li>Telepon: 123-456-789</li>
                </ul>
                <p>Kami sangat menghargai partisipasi Anda dalam menjaga kebersihan lingkungan dan mengurangi sampah plastik.</p>
                </section>
            </main>

        <div className="kotak-lapor">
            <div className="container-lapor">
                <div className="py-2">
                    <h2 className="text-center mt-5" > Laporan Baru </h2>
                    <h5 className="text-center" > Silahkan isi data berikut </h5>
                </div>

                <form className="form-lapor" onSubmit={handleSubmit}>
                    <div>
                        <label>Nama Pelapor</label>
                        <input className="form-control" type="text" placeholder="Masukkan nama anda" value={username} onChange={(e) => setUsername(e.target.value)} />
                        {formError && !username && <div className="alert alert-danger">Nama Pelapor wajib diisi</div>}
                    </div>

                    <div>
                        <label htmlFor="">Email Pelapor</label>
                        <input className="form-control" type="email" placeholder="Masukkan email anda" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {formError && !email && <div className="alert alert-danger">Email Pelapor wajib diisi</div>}
                    </div>

                    <div>
                        <label>No Hp Pelapor</label>
                        <input className="form-control" type="text" placeholder="Masukkan no hp anda" value={nohp} onChange={(e) => setNohp(e.target.value)} />
                        {formError && !nohp && <div className="alert alert-danger">No Hp Pelapor wajib diisi</div>}
                    </div>

                    <div>
                        <label>Lokasi</label>
                        <input className="form-control" type="text" placeholder="Masukkan lokasi kejadian" value={lokasi} onChange={(e) => setLokasi(e.target.value)} />
                        {formError && !lokasi && <div className="alert alert-danger">Lokasi wajib diisi</div>}
                    </div>

                    <div>
                        <label>Jenis Kejadian</label>
                        <select className="form-select" value={jenis} onChange={(e) => setJenis(e.target.value)}>
                            <option value="">Pilih jenis kejadian</option>
                            <option value="Membuang sampah plastik sembarangan">Membuang sampah plastik sembarangan</option>
                            <option value="Membakar limbah plastik sembarangan">Membakar limbah plastik sembarangan</option>
                            <option value="Oplos beras plastik">Oplos beras plastik</option>
                        </select>
                        {formError && !jenis && <div className="alert alert-danger">Jenis Kejadian wajib dipilih</div>}
                    </div>

                    <div>
                        <label>Deskripsi Kejadian</label>
                        <div className="input-group">
                            <textarea className="form-control" id="floatingTextarea" placeholder="Ceritakan kejadian dengan bahasa yang baik dan benar secara detail" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}></textarea>
                        </div>
                        {formError && !deskripsi && <div className="alert alert-danger">Deskripsi Kejadian wajib diisi</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Upload Bukti Foto</label>
                        <input className="form-control form-control-sm" id="formFileSm" type="file" onChange={handleFileUpload} />
                        {formError && !uploadedImageUrl && <div className="alert alert-danger">Bukti Foto wajib diupload</div>}
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" required></input>
                        <p>Anda menyetujui bahwa anda menyertakan form berikut dengan jujur dan sesuai dengan hukum yang berlaku</p>
                    </div>

                    <div className="container d-grid gap-2">
                        <button className="btn btn-success btn-primary mb-4"
                            type="submit"
                            disabled={loading}>
                            {loading ? "Mengirim..." : "Kirim"}
                        </button>
                    </div>
                </form>
            </div>

            {/* get data caouseel */}
            <div className="container mt-1">
                <div id="myCarousel" className="carousel  carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <h1 className="text-center">Daftar laporan saat ini</h1>
                        {data.map((item, index) => (
                            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item.id}>
                                <div className="carousel-card" >
                                    {/* <img src={item.bukti} alt="" className="img-fluid" style={{ width: "50px", height: "50px" }} /> */}
                                    <img className="itm-bukti" src={item.bukti} alt="" />
                                    <h6 className="text-center">Lokasi Kejadian : {item.lokasi}</h6>
                                    <p className="text-center">Deskripsi Kejadian : {item.deskripsi}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev mt-5" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next mt-5" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
        <main>
                <section id="report">
                <h2>Laporkan Pelanggaran Sampah Plastik</h2>
                <p>Jika Anda melihat pelanggaran terkait sampah plastik, silakan laporkan dengan menghubungi kami melalui:</p>
                <ul>
                    <li>Email: savi@pelanggaransampahplastik.com</li>
                    <li>Telepon: 0822-1528-2696</li>
                </ul>
                <p>Kami sangat menghargai partisipasi Anda dalam menjaga kebersihan lingkungan dan mengurangi sampah plastik.</p>
                </section>
            </main>
        </>

    );
}

export default Lapor;