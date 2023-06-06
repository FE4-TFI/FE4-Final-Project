const CardSlide = ({ title, img }) => {
    const cardStyle = {
        backgroundImage: `url('/img_artikel/${img}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className="p-4">
            <div className="flex flex-col items-end" style={cardStyle}>
                <h1>{title}</h1>
                <button className="bg-gray-500 px-4 py-2 text-sm text-white rounded-md hover:bg-gray-600 cursor-pointer">Baca</button>
            </div>
        </div>
    )
}

export default CardSlide