import "./layout.css"
import { HiOutlineMenu } from 'react-icons/hi'
import { useNavigate } from "react-router-dom";
import { ImCross } from 'react-icons/im'
import { FaDiscord } from 'react-icons/fa'

export default function Navbar() {
    let navigate = useNavigate();

    function Render() {
        const veri = document.getElementById("modals")
        if(veri) veri.style.display = "none"
    }

    function RenderTwo() {
        const veri = document.getElementById("modals")
        if(veri) veri.style.display = "flex"
    }

    const NewArray =
    [
        {
           link: "/",
           path: "AnaSayfa"
        },
        {
            link: "/commands",
            path: "Komutlar"
         },
        {
            link: "https://discord.gg/QkGFWUub",
            path: "Discord"
         },
    ]


    function clickEvent(link) {
        if (link.startsWith("http")) {
            window.open(link, "_blank")
            return;
        }

        navigate(link, { replace: true })
    }

    return (
        <div className="navbar-bg">
             <div id="modals" className="modals">
                <div className="heelloborher">
                    <ImCross onClick={Render} size={32} color="white" />
                </div>
                <div className="hopkardesim">
                    {
                        NewArray.map((item, index) => {
                            return (
                                <div key={index}  onClick={() => clickEvent(item.link)} className="hopkardesimcard"><span><a href={item.link}>{item.path}</a></span></div>
                            )
                        } )
                    }
                </div>
            </div>
            <div className="nav-title">
                <span>Bellflower</span>
            </div>
            <div className="nav-text-bg">
               {
                 NewArray.map((item, index) => {
                    return (
                        <div key={index} onClick={() => clickEvent(item.link)} className="hopkardesimcard"><span><a href={item.link}>{item.path}</a></span></div>
                    )
                } )
               }
            </div>
            <div className="navbar-hello">
                <HiOutlineMenu onClick={RenderTwo} size={32} color="white" />
            </div>
            <div className="navbar-button">
                <button><FaDiscord size={24} color="white" /> Login</button>
            </div>
        </div>
    )
}