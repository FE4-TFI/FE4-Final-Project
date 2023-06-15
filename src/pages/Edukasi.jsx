import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function Edukasi (){
    const {title} = useParams()

    const [detail, setDetail] = useState([])

    useEffect(() => {
        axios("https://648aeba217f1536d65e9f714.mockapi.io/Edukasi")
        .then(({ data }) => {
            const filteredData = data.filter(
              item =>
                item.judul === "reuse" ||
                item.judul === "reduce" ||
                item.judul === "recycle"
            );
            setDetail(filteredData);
          })
          .catch(err => console.log(err));
      }, []);
    console.log(detail)


    return(
        <>
        
        <div className="Container-Detail-Edukasi">
            <h1>Judul Item : {title}</h1>
            {/* <video src={} autoPlay muted loop className="video-bg"/> */}

            {detail.length === 0 ? <span>Loading ...</span> : 
            detail.map((item, index) => (
                <div className="edukasi-konten" key={index}>
                    <img src={item.gambar} width={1000} />
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