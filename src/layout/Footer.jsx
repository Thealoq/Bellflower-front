import { AiFillGithub } from 'react-icons/ai'

import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
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
            NewArray.map((item, index) => {
              return (
               <div key={index} className='footer-text'>
                  <a href={item.link}>{item.icon} </a>
               </div>
              )
            })
          }
        </div>
    )
}