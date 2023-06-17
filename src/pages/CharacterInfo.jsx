import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
export default function CharacterInfo() {

    const { id } = useParams()
    const api = `https://rickandmortyapi.com/api/character/${id}`
    const [data, setData] = useState([])
console.log(data)



    async function fetchDatas() {
        const { data } = await axios.get(api); //contains the info of all the data from the api
        setData(data)
    }

    useEffect(() => {
        fetchDatas();  //fetching data
    }, []
    );

    return (
        <>
   
          {data ? (
            <div className="grid">
<div className="cards">
              <div className="row">
                <div className="card-image-container">
                  <img src={data?.image} alt={data?.name} />
                </div>
                <div className="card-description">
                  <h1 className="title">{data?.name}</h1>
                  <div className="just-gap">
                    <p className="desc">Last Known Location: </p>
                    <p>{data?.location?.name}</p>
                  </div>
      
                  {data?.status === 'Dead' ? (
                    <p className="status status-color-red">{data?.status}</p>
                  ) : data?.status === 'Alive' ? (
                    <p className="status status-color-green">{data?.status}</p>
                  ) : (
                    <p className="status status-color-grey">{data?.status}</p>
                  )}
                  <div className="just-gap">
                    <p className="desc">Gender:</p>
                    <p>{data?.gender}</p>
                  </div>
                  <div className="just-gap">
                    <p className="desc">Id:</p>
                    <p>{data?.id}</p>
                  </div>
                </div>
              </div>
            </div>
          
            </div>)
            : (
            <p>Loading data...</p>
          )}
        </>)
  
}