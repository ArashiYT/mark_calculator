import { LENGTH } from "../data/loading"
import "../styles/loading.css"

export default function LoadingPage() {
    const count = new Array(LENGTH).fill(0)
    
    return (
        <div className="loading_container">
        <div>
            {count.map((_, id) => (
                <div key={id} className="loading_dot" style={
                    {
                        transform: `rotate(calc(${id + 1} * (360deg / ${LENGTH}))) translateY(35px)`,
                        animationDelay: `calc(${id + 1} * 0.1s)`
                    }
                }></div>
            ))}
        </div>
    </div>
    )
}