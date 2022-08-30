export default function HomeCard(props) {
    function Render() {
        if(props.icon) {
            return(
                <div className="home-cirlce">{props.icon}</div>
            )
        }
    }
    return (
        <div className="home-card">
            {
                Render()
            }
            <div className="card-title">
                <span>{props.title}</span>
            </div>
            <div className="card-descript">
                {props.desc}
            </div>
        </div>
    )
}