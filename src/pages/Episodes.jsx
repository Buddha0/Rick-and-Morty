import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import Select from "../components/Select";

export default function Episodes(){
    const [apiData, setApiData] = useState([]);
    const [id, setId] = useState(1);
    const [data, setData] = useState([])

    const { episode, name } = apiData;
    const api = `https://rickandmortyapi.com/api/episode/${id}`;  //the main api 
    async function fetchData() {
        try {
            const { data } = await axios.get(api);
            console.log(data)
            setApiData(data);  // containes the necessary data from  the api


            let a = await Promise.all(data.characters.map((x) => {
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
                    <h1 className="title">Select Episode</h1>
                    <Select totalNumber={51} title = "Episode" setId = {setId}/>
                </div>

                <div className="container-right">
                    <div className="max-width">
                        <div className="center"><h1 className="title">Episode: {episode} </h1></div>
                        <div className="center"><p>Name: {name} </p></div>
                        <div className="grid">
                            {data.map((datas) => {
                                return <Card datas={datas} key={datas.id} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>)
}