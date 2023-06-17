import { Link } from "react-router-dom";
export default function Card({ datas }) {
    return (
        <>
        <Link to  = {`/info/${datas.id}`} className="link">
            <div className="cards">
                <div className="row">
                    <div className="card-image-container">
                        <img src={datas.image}></img>
                    </div>
                    <div className="card-description">
                        <h1 className="title">{datas.name}</h1>
                        <div className="just-gap">
                            <p className="desc">Last Known Location: </p>
                            <p>{datas.location.name}</p>
                        </div>

                        {datas.status === "Dead" ? (
                            <p className=" status status-color-red">{datas.status}</p>
                        ) : datas.status === "Alive" ? (
                            <p className=" status status-color-green">{datas.status}</p>
                        ) : (
                            <p className=" status status-color-grey">{datas.status}</p>
                        )}
                        <div className="just-gap">
                            <p className="desc">Gender:</p>
                            <p> {datas.gender}</p>
                        </div>
                        <div className="just-gap">
                            <p className="desc">Id:</p>
                            <p> {datas.id}</p>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        </>
    )
}