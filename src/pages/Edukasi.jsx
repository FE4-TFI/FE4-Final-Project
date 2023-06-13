import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function Edukasi (){
    const {title} = useParams()

    const [detail, setDetail] = useState([])

    useEffect(() => {
        axios("https://64802513f061e6ec4d48a5f4.mockapi.io/indotaste/Edukasi")
        .then(({data}) => setDetail(data))
        .catch(err => console.log(err))
    },[]);
    console.log(detail)

    return(
        <>
        
        <div className="Container-Detail-Edukasi">
            <h1>Judul Item : {title}</h1>
            {/* <video src={} autoPlay muted loop className="video-bg"/> */}

            {detail.length === 0 ? <span>Loading ...</span> : 
            detail.map((item, index) => (
                <div className="edukasi-konten" key={index}>
                    <img src={item.video} width={1000} />
                    <h1>{item.judul}</h1>
                    <p>{item.deskripsi}</p>
                </div>
            ))
            }
        </div>
        </>
    );
}
export default Edukasi