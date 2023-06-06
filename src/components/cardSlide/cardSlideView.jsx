import './cardSlide.css'

const CardSlide = ({ title, img }) => {
    const cardStyle = {
        backgroundImage: `url('/img_artikel/${img}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className="mt-4">
            <div className="card" style={cardStyle}>
                <h1 className="card-title">{title}</h1>
                <button className="btn-baca">Baca</button>
            </div>
        </div>
    )
}

export default CardSlide