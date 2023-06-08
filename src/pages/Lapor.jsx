import { useState } from "react"
import { useDispatch } from 'react-redux';
import { laporUser } from '../redux/laporReducer';

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
    const [formError, setFormError] = useState(false); // State untuk menandai adanya error form

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validasi form wajib diisi
        if (!username || !nohp || !email || !lokasi || !jenis || !deskripsi || !bukti) {
            setFormError(true);
            return; // Jika ada input yang kosong, hentikan pengiriman laporan
        }

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
                setFormError(false);
            })
            .catch((error) => {
                // Proses gagal, set pesan error
                setSuccessMessage("");
                setErrorMessage("Gagal mengirim laporan");
                setFormError(false);
            });
    };

    return (
        <div className="container">
            <h2> Buat Laporan Baru </h2>
            <h5> Silahkan isi data berikut </h5>

            <form className="form-group custom-form" onSubmit={handleSubmit}>
                <div>
                    <label>Nama Pelapor</label>
                    <input className="form-control" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    {formError && !username && <div className="alert alert-danger">Nama Pelapor wajib diisi</div>}
                </div>

                <div>
                    <label htmlFor="">Email Pelapor</label>
                    <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {formError && !email && <div className="alert alert-danger">Email Pelapor wajib diisi</div>}
                </div>

                <div>
                    <label>No Hp Pelapor</label>
                    <input className="form-control" type="text" value={nohp} onChange={(e) => setNohp(e.target.value)} />
                    {formError && !nohp && <div className="alert alert-danger">No Hp Pelapor wajib diisi</div>}
                </div>

                <div>
                    <label>Lokasi</label>
                    <input className="form-control" type="text" value={lokasi} onChange={(e) => setLokasi(e.target.value)} />
                    {formError && !lokasi && <div className="alert alert-danger">Lokasi wajib diisi</div>}
                </div>

                <div>
                    <label>Jenis Kejadian</label>
                    <select className="form-select" value={jenis} onChange={(e) => setJenis(e.target.value)}>
                        <option value="">Pilih jenis kejadian</option>
                        <option value="1">Membuang sampah plastik sembarangan</option>
                        <option value="2">Membakar limbah plastik sembarangan</option>
                        <option value="3">Oplos beras plastik</option>
                    </select>
                    {formError && !jenis && <div className="alert alert-danger">Jenis Kejadian wajib dipilih</div>}
                </div>


                <div>
                    <label>Deskripsi Kejadian</label>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}></textarea>
                    </div>
                    {formError && !deskripsi && <div className="alert alert-danger">Deskripsi Kejadian wajib diisi</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Upload Bukti Foto</label>
                    <input className="form-control form-control-sm" id="formFileSm" type="file" value={bukti} onChange={(e) => setBukti(e.target.value)} />
                    {formError && !bukti && <div className="alert alert-danger">Bukti Foto wajib diupload</div>}
                </div>

                <div className="container">
                    <button className="btn btn-success" type="submit">KIRIM</button>
                </div>
            </form>
        </div>
    );
}

export default Lapor;
