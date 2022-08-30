import "./layout.css"
import { FaBrandsDiscord } from 'solid-icons/fa'
import { AiOutlineMenu } from 'solid-icons/ai'
import { ImCross } from 'solid-icons/im'
import { useNavigate } from "solid-app-router"

export default function Navbar() {
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
            link: "commands",
            path: "Komutlar"
         },
        {
            link: "https://discord.gg/QkGFWUub",
            path: "Discord"
         },
    ]


    function clickEvent(href) {
        console.log(href);
        window.location.href = href
    }

    return (
        <div className="navbar-bg">
             <div id="modals" className="modals">
                <div className="heelloborher">
                    <ImCross onClick={Render} size={32} color="white" />
                </div>
                <div className="hopkardesim">
                    {
                        NewArray.map( item => {
                            return (
                                <div onClick={() => clickEvent(item.link)} className="hopkardesimcard"><span><a href={item.link}>{item.path}</a></span></div>
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
                 NewArray.map( item => {
                    return (
                        <div onClick={() => clickEvent(item.link)} className="hopkardesimcard"><span><a href={item.link}>{item.path}</a></span></div>
                    )
                } )
               }
            </div>
            <div className="navbar-hello">
                <AiOutlineMenu onClick={RenderTwo} size={32} color="white" />
            </div>
            <div className="navbar-button">
                <button><FaBrandsDiscord size={24} color="white" /> Login</button>
            </div>
        </div>
    )
}