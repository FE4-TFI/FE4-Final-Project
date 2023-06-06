import './loading.css'

const LoadingView = ({ msg }) => (
    <section className="loading-container">
        <div className="loading-box">
            <p className="loading-title">{msg}</p>
        </div>
    </section>
)

export default LoadingView