import { useState } from "react";
import { useDispatch } from 'react-redux';
import { laporUser } from '../redux/laporReducer';
import axios from "axios";
import * as filestack from 'filestack-js';

function Lapor() {
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
                alert("Laporan Berhasil Dibuat")
                setFormError(false);
                e.target.reset();
            })
            .catch((error) => {
                // Proses gagal, set pesan error
                alert("Laporan Gagal Dibuat")
                setFormError(false);
            });
    };

    const handleFileUpload = (event) => {
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

    return (
        <div className="container bg-light border-light-subtle rounded mt-5">
            <div className="py-2">
                <h2 className="text-center mt-5" > Buat Laporan Baru </h2>
                <h5 className="text-center" > Silahkan isi data berikut </h5>
            </div>

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
                        <option value="Membuang sampah plastik sembarangan">Membuang sampah plastik sembarangan</option>
                        <option value="Membakar limbah plastik sembarangan">Membakar limbah plastik sembarangan</option>
                        <option value="Oplos beras plastik">Oplos beras plastik</option>
                    </select>
                    {formError && !jenis && <div className="alert alert-danger">Jenis Kejadian wajib dipilih</div>}
                </div>

                <div>
                    <label>Deskripsi Kejadian</label>
                    <div className="input-group">
                        <textarea className="form-control" id="floatingTextarea" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}></textarea>
                    </div>
                    {formError && !deskripsi && <div className="alert alert-danger">Deskripsi Kejadian wajib diisi</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Upload Bukti Foto</label>
                    <input className="form-control form-control-sm" id="formFileSm" type="file" onChange={handleFileUpload} />
                    {formError && !uploadedImageUrl && <div className="alert alert-danger">Bukti Foto wajib diupload</div>}
                </div>

                <div className="container d-grid gap-2">
                    <button className="btn btn-success btn-primary"
                        type="submit"
                        disabled={loading}>
                        {loading ? "Mengirim..." : "Kirim"}
                    </button>
                </div>
            </form>
        </div>


    );
}

export default Lapor;