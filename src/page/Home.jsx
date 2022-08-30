import img from "../assets/Group.png";
import Logo from "../assets/logo.png";

import { IoTicketSharp } from 'solid-icons/io'
import { FaSolidServer } from 'solid-icons/fa'
import Card from "../components/Helper/HomeCard"

import "../layout/layout.css"
export default function HomePage() {

  const NewArray = [
    {
      title: "Destek Sistemi",
      icon: <IoTicketSharp size={24} color="white" />,
      desc: "Bellflower'un en gelişmiş sistemlerinden biri olan destek sisteminde, kullanıcı ekleyip çıkartma, yetkili ayarlama (rol ile), buton ile destek açılmasını sağlama, özelleştirilmiş mesajlar gibi bir çok özellik vardır."
    },
    {
      title: "Destek Sistemi",
      icon: <IoTicketSharp size={24} color="white" />,
      desc: "Bellflower'un en gelişmiş sistemlerinden biri olan destek sisteminde, kullanıcı ekleyip çıkartma, yetkili ayarlama (rol ile), buton ile destek açılmasını sağlama, özelleştirilmiş mesajlar gibi bir çok özellik vardır."
    },
    {
      title: "Destek Sistemi",
      icon: <IoTicketSharp size={24} color="white" />,
      desc: "Bellflower'un en gelişmiş sistemlerinden biri olan destek sisteminde, kullanıcı ekleyip çıkartma, yetkili ayarlama (rol ile), buton ile destek açılmasını sağlama, özelleştirilmiş mesajlar gibi bir çok özellik vardır."
    },
    {
      title: "Destek Sistemi",
      icon: <IoTicketSharp size={24} color="white" />,
      desc: "Bellflower'un en gelişmiş sistemlerinden biri olan destek sisteminde, kullanıcı ekleyip çıkartma, yetkili ayarlama (rol ile), buton ile destek açılmasını sağlama, özelleştirilmiş mesajlar gibi bir çok özellik vardır."
    },
    {
      title: "Destek Sistemi",
      icon: <IoTicketSharp size={24} color="white" />,
      desc: "Bellflower'un en gelişmiş sistemlerinden biri olan destek sisteminde, kullanıcı ekleyip çıkartma, yetkili ayarlama (rol ile), buton ile destek açılmasını sağlama, özelleştirilmiş mesajlar gibi bir çok özellik vardır."
    },
    {
      title: "Destek Sistemi",
      icon: <IoTicketSharp size={24} color="white" />,
      desc: "Bellflower'un en gelişmiş sistemlerinden biri olan destek sisteminde, kullanıcı ekleyip çıkartma, yetkili ayarlama (rol ile), buton ile destek açılmasını sağlama, özelleştirilmiş mesajlar gibi bir çok özellik vardır."
    },
  ]

  return (
    <div>
      <div className="home-page">
        <div className='test'>
          <div className="titlegod">
            <span>Neden</span>
            <b>Bellflower ?</b>
            <p>Eşsiz stat ve seviye sistemleri, kolay ve anlaşılabilir arayüzler. </p>
          </div>
          <div className="hello" >
            <img src={img} />
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="home-middle">
          {
            NewArray.map(item => {
              return (
                <Card icon={item.icon} desc={item.desc} title={item.title} />
              )
            })
          }
        </div>
      </div>
      <div className="home-page">
        <div className="home-logo">
          <div>
            <img src={Logo} />
          </div>
          <div>
            <div className="newtext">
              <div className="card-title">
                <span>Destek Sistemi</span>
              </div>
              <div style={{ color:"white" }} className="card-descript">
                <span>EnderBot'un en gelişmiş sistemlerinden biri olan destek sisteminde, kullanıcı ekleyip çıkartma, yetkili ayarlama (rol ile), buton ile destek açılmasını sağlama, özelleştirilmiş mesajlar gibi bir çok özellik vardır.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="home-pages">
        <div className="home-stats"><span>Stats</span></div>
      </div>
      <div className="home-pages">
        <div className="stats-icons">
          <div className="icons">
            <FaSolidServer size={32} color="#A340AE" /> <span>0 Sunucu</span>
          </div>
          <div className="icons">
            <FaSolidServer size={32} color="#A340AE" /><span>0 Kullancılar</span>
          </div>
          <div className="icons">
            <FaSolidServer size={32} color="#A340AE" /><span>0 Komut</span>
          </div>
        </div>
      </div>
    </div>
  )
}


