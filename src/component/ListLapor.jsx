
import { useState } from "react";
import { useGetLapor } from "../hooks/laporhooks";
import axios from "axios";


function ListLapor(){

    const [inputNamaPelapor, setInputNamaPelapor] = useState("")
    const [inputNohpPelapor, setInputNohpPelapor] = useState("")
    const [inputDeskripsi, setInputDeskripsi] = useState("")
    const [inputLokasi, setInputLokasi] = useState("")


    const handleInputNamaPelapor = (event) => {
        setInputNamaPelapor(event.target.value)
    }

    const handleInputNohpPelapor = (event) => {
        setInputNohpPelapor(event.target.value)
    }

    const handleInputDeskripsi = (event) => {
        setInputDeskripsi(event.target.value)
    }

    const handleInputLokasi = (event) => {
        setInputLokasi(event.target.value)
    }

    const addLapor = (event) => {
        event.preventDefault()

        console.log(inputNamaPelapor)

        const lapor ={
            "nama" : inputNamaPelapor,
            "nohp" : inputNohpPelapor,
            "deskripsi" : inputDeskripsi,
            "lokasi" : inputLokasi,

        }

        axios.post("https://64512af1e1f6f1bb22a9f2c1.mockapi.io/savi/user",lapor)
    }    

    const hasil = useGetLapor()
    return(
        <>
            <div className="lapor">
                <div className="form-container">
                    <h2>Form Laporan Pelanggaran</h2>

                    {/* Form Laporan */}
                    <form onSubmit={addLapor}>
                        <label className="nama">Nama Pelapor:</label>
                        <input type="text" id="nama" name="nama" placeholder="Masukkan nama anda" value={inputNamaPelapor} onChange={handleInputNamaPelapor} required/>

                        <label className="nohp">No Hp Pelapor:</label>
                        <input type="number" id="nohp" name="nohp" placeholder="Masukan no hp anda" value={inputNohpPelapor} onChange={handleInputNohpPelapor} required/>

                        <label className="deskripsi">Deskripsi Kejadian:</label>
                        <textarea id="deskripsi" name="deskripsi" placeholder="Masukan deskripsi kejadian dengan lengkap dan kalimat yang jelas" value={inputDeskripsi} onChange={handleInputDeskripsi} required></textarea>

                        <label className="lokasi">Lokasi Kejadian:</label>
                        <input type="text" id="lokasi" name="lokasi" placeholder="Masukkan alamat lengkap kejadian" value={inputLokasi} onChange={handleInputLokasi} required/>

                        <label className="foto">Unggah Bukti Foto:</label>
                        <input type="file" id="foto" name="foto" accept="image/*"/>

                        <button type="submit">Kirim Laporan</button>
                    </form>
                    {/* end form laporan */}

                </div>
            </div>

            {hasil.length === 0 ? <div className="api-lapor"><span>Loading...</span></div> :
                hasil.map((item, index)=> (
                    <div className="daftar-laporan" key={index}>

                        <div className="card-laporan">
                            <img src={item.bukti} alt="buktilaporan" width={500}/>
                            <h2>Nama Pelapor : {item.nama}</h2>
                            <span>Lokasi : {item.lokasi}</span>
                            <span>Deskripsi : {item.deskripsi}</span>
                        </div>
                    </div>
                ))
            }
        </>
    );
}
export default ListLapor