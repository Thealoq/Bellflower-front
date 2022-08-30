import { AiFillGithub } from 'solid-icons/ai'
import { AiOutlineInstagram } from 'solid-icons/ai'
import { AiFillYoutube } from 'solid-icons/ai'
export default function Footer() {

   const NewArray = [
    {
    icon: <AiFillGithub size={32} color="white"/>,
    link: "https://github.com/Thealoq"
   },
   {
    icon: <AiOutlineInstagram size={32} color="white"/>,
    link: "https://www.instagram.com/thealoq/"
   },
   {
    icon: <AiFillYoutube size={32} color="white"/>,
    link: "https://www.youtube.com/channel/UCdRdD1r4IB0xI9PcFoTkLBg"
   }
]

    return (
        <div className="footer">
          {
            NewArray.map( item => {
              return (
               <div className='footer-text'>
                  <a href={item.link}>{item.icon} </a>
               </div>
              )
            })
          }
        </div>
    )
}