import { Link } from "react-router-dom"
import Register from "./Register"
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { laporUser } from '../redux/laporReducer';

// import { Button } from 'bootstrap'
function Lapor() {

    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [nohp, setNohp] = useState("");
    const [email, setEmail] = useState("");
    const [lokasi, setLokasi] = useState("");
    const [jenis, setJenis] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [bukti, setBukti] = useState("");
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Buat objek data laporan
        const laporData = {
            username,
            nohp,
            email,
            lokasi,
            jenis,
            deskripsi,
            bukti,
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
                setBukti("");
                setSuccessMessage("Laporan berhasil dikirim");
                setErrorMessage("");
            })
            .catch((error) => {
                // Proses gagal, set pesan error
                setSuccessMessage("");
                setErrorMessage("Gagal mengirim laporan");
            });
    };


    return (
        <>

            <div className="container">
                <h2> Buat Laporan Baru </h2>
                <h5> Silahkan isi data berikut </h5>

                <form className="form-group custom-form" onSubmit={handleSubmit}>
                    <div>
                        <label>Nama Pelapor</label>
                        <input className="form-control" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                    </div>
                    <div>
                        <label htmlFor="">Email Pelapor</label>
                        <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>No Hp Pelapor</label>
                        <input className="form-control" type="text" value={nohp} onChange={(e) => setNohp(e.target.value)} />
                    </div>
                    <div>
                        <label>Lokasi</label>
                        <input className="form-control" type="text" value={lokasi} onChange={(e) => setLokasi(e.target.value)} />
                    </div>
                    <div>
                        <label>Jenis Kejadian</label>
                        <select className="form-select" name="" id="" value={jenis} onChange={(e) => setJenis(e.target.value)}>
                            <option selected>Pilih jenis kejadian</option>
                            <option value="1">Membuang sampah plastik sembarangan</option>
                            <option value="2">Membakar limbah plastik sembarangan</option>
                            <option value="3">Oplos beras plastik</option>
                        </select>
                        {/* <select className="form-select" name="" id="">
                            
                        </select> */}
                    </div>
                    <div>
                        <label>Deskripsi Kejadian</label>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}></textarea>

                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Upload Bukti Foto</label>
                        <input className="form-control form-control-sm" id="formFileSm" type="file" value={bukti} onChange={(e) => setBukti(e.target.value)} />
                    </div>

                    <div className="container">
                        {/* <button className="btn btn-success" type="button" > */}
                        {/* {loading ? "Mendaftarkan Akun..." : "Daftar"} */}
                        {/* </button> */}
                        <button onClick={handleSubmit} className="btn btn-success" type="submit">KIRIM</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Lapor