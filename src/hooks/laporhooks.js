import axios from "axios";
import { useEffect, useState} from "react";

export function useGetLapor(){
    const [hasil, setHasil] = useState([])

    useEffect(() => {
        axios("https://64512af1e1f6f1bb22a9f2c1.mockapi.io/savi/user")
        .then(({data}) => setHasil(data))
        .catch(err => console.log(err))
    },[]);
    console.log(hasil)

    return hasil

}