import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import Select from "../components/Select";


export default function Location() {

    const [apiData, setApiData] = useState([]);
    const [id, setId] = useState(1);
    const [data, setData] = useState([])


    const { dimension, name } = apiData;
    const api = `https://rickandmortyapi.com/api/location/${id}`;  //the main api 
    async function fetchData() {
        try {
            const { data } = await axios.get(api);
            setApiData(data);  // containes the necessary data from  the api


            let a = await Promise.all(data.residents.map((x) => {
                return fetch(x).then((res) => res.json())
            }))
            setData(a)  //contains all the residents info from the api Data
        } catch (error) {
            console.log('Error:', error);
        }
    }

    useEffect(() => {
        fetchData();   //fetching all the data
    }, [api]);


    return (
        <>
            <div className="main-section">

                <div className="container-left">
                    <h1 className="title">Select Location</h1>
                   <Select totalNumber={126} title = "Location" setId = {setId}/>
                </div>

                <div className="container-right">
                    <div className="max-width">
                        <div className="center"><h1 className="title">Dimension: {dimension} </h1></div>
                        <div className="center"><p>Name: {name} </p></div>
                        <div className="grid">
                            {data.map((datas) => {
                                return <Card datas={datas} key={datas.id} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}