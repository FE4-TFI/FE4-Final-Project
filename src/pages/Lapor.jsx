import { Link } from "react-router-dom"
import Register from "./Register"
// import { Button } from 'bootstrap'
function Lapor() {
    return (
        <>
            <div>
                <h2>DAFTAR</h2>

                <form className="form-group custom-form">
                    <div>
                        <label>Nama Pelapor</label>
                        <input className="form-control" type="text" placeholder="Masukkan Nama User" />
                    </div>
                    <div>
                        <label htmlFor="">Email Pelapor</label>
                        <input className="form-control" placeholder="Masukkan Email" type="email" />
                    </div>
                    <div>
                        <label>No Hp Pelapor</label>
                        <input className="form-control" type="number" />
                    </div>
                    <div>
                        <label>Lokasi</label>
                        <input className="form-control" type="text-area" />
                    </div>
                    <div>
                        <label>Jenis Kejadian</label>
                        <input className="form-control" type="password" />
                    </div>
                    <div>
                        <label>Deskripsi Kejadian</label>
                        <input className="form-control" type="password" />
                    </div>
                    <button className="btn btn-success" type="button" >
                        {/* {loading ? "Mendaftarkan Akun..." : "Daftar"} */} KIRIM
                    </button>
                </form>

            </div>
        </>
    )
}

export default Lapor