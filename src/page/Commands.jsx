import img from "../assets/pc.png"
import { IoSettingsSharp } from 'solid-icons/io'
export default function Commands() {
    return (
        <div className="commands-page">
            <div className="commads-home">
                <img src={img} />
            </div>
            <div className="center text-commads">
                <div><IoSettingsSharp size={32} color="#9061F9" /></div>
                <div><span>Bot Komutları</span></div>
            </div>
            <div className="center textiy"><p> Bellflower Bot'un komutları hakkında bilgi alabilirsiniz.</p></div>
            <div className="center commads-box">
                <select name="commands" id="cars">
                    <option value="help">/help</option>
                    <option value="help">/help</option>
                    <option value="help">/help</option>
                    <option value="help">/help</option>
                    <option value="help">/help</option>
                    <option value="help">/help</option>
                </select>
            </div>
        </div>
    )
}