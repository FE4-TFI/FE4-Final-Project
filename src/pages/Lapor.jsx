import { Link } from "react-router-dom"
import Register from "./Register"
import { useState } from "react"
// import { Button } from 'bootstrap'
function Lapor() {

    return (
        <>

            <div className="container">
                <h2> Buat Laporan Baru </h2>
                <h5> Silahkan isi data berikut </h5>

                <form className="form-group custom-form">
                    <div>
                        <label>Nama Pelapor</label>
                        <input className="form-control" type="text" autoFocus />
                    </div>
                    <div>
                        <label htmlFor="">Email Pelapor</label>
                        <input className="form-control" type="email" />
                    </div>
                    <div>
                        <label>No Hp Pelapor</label>
                        <input className="form-control" type="string" />
                    </div>
                    <div>
                        <label>Lokasi</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div>
                        <label>Jenis Kejadian</label>
                        <select className="form-select" name="" id="">
                            <option selected>Pilih jenis kejadian</option>
                            <option value="1">Membuang sampah plastik sembarangan</option>
                            <option value="2">Membakar limbah plastik dengan</option>
                            <option value="3"></option>
                        </select>
                    </div>
                    <div>
                        <label>Deskripsi Kejadian</label>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>

                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Upload Bukti Foto</label>
                        <input className="form-control form-control-sm" id="formFileSm" type="file" />
                    </div>

                    <div className="container">
                        <button className="btn btn-success" type="button" >
                            {/* {loading ? "Mendaftarkan Akun..." : "Daftar"} */} KIRIM
                        </button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Lapor