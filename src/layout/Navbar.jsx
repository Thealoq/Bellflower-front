import "./layout.css"
import { FaBrandsDiscord } from 'solid-icons/fa'
export default function Navbar() {
    return (
        <div className="navbar-bg">
            <div className="nav-title">
                <span>Bellflower</span>
            </div>
            <div className="nav-text-bg">
                <div>
                    <span>AnaSayfa</span>
                </div>
                <div>
                    <span>Komutlar</span>
                </div>
                <div>
                    <span>Discord</span>
                </div>
            </div>
            <div className="navbar-button">
                <button><FaBrandsDiscord size={24} color="white"/> Login</button>
            </div>
        </div>
    )
}