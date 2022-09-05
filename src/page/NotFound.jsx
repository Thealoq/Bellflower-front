import img from "../assets/404.png"
import "../layout/layout.css"
import { useNavigate } from "react-router-dom";
export default function NotFound() {
    let navigate = useNavigate();
    function hello()  {
     setTimeout(() => {
        navigate("/", { replace: true })
    }, 5000);
}

    return(
        <div className="divim">
            <div className="banner center">
                <img src={img}/>
            </div>
            <div className="center texttwobruh">
                <h1>Sayfa Bulunamadi Sizi Ana Sayfa Yönlendiriyorum</h1>
            </div>
            {
                hello()
            }
        </div>
    )
} 