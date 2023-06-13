import RegisterForm from "./Register"
import LoginForm from "./Login"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eduArtikel } from "../redux/edukasiReducer";

function Edukasi() {
    const dispatch = useDispatch();
    const { loading, error, success, data } = useSelector(
        (state) => state.edukasi
    );

    useEffect(() => {
        dispatch(eduArtikel());
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            {/* {success && <p>Data fetched successfully!</p>} */}
            <div className="data-list mt-5 d-flex">
                {data.map((item) => (
                    <div className="card mt-2 mx-1" style={{ width: "13rem" }} key={item.id}>
                        <h6 className="text-center">{item.judul}</h6>
                        <p className="text-center">{item.detail}</p>
                    </div>
                ))}
            </div>
            <LoginForm />
//             <RegisterForm></RegisterForm>
        </div>
    );
}

export default Edukasi;



